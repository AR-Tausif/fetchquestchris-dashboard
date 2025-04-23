import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cookies } from "react-cookie";
import { removeUser } from '../features/auth.slice';

const cookies = new Cookies();

const baseQuery = fetchBaseQuery({
    baseUrl: "http://192.168.40.76:3000/api",
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {

        const state = getState() as { userSlice: { token: { accessToken: string } } };

        const token = state?.userSlice?.token?.accessToken

        // const token = getFromLocalStorage("accessToken")
        // const token = cookies.get("accessToken");

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

// Refresh the base----------------------------------------------------------------
const baseQueryWithReauth: typeof baseQuery = async (
    args,
    api,
    extraOptions,
) => {

    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {

        const refreshToken = cookies.get("refreshToken");

        console.log("refreshToken", refreshToken)

        if (refreshToken) {
            const refreshResult = await baseQuery(
                {
                    url: "/auth/refresh-token",
                    method: "POST",
                    body: { refreshToken: refreshToken },
                },
                api,
                extraOptions,
            ) as { data: { data: { accessToken: string } } };

            // Check if refreshResult contains data and accessToken
            if (refreshResult?.data && refreshResult?.data?.data?.accessToken) {

                // const newAccessToken = refreshResult?.data?.data?.accessToken;

                // // Save the new token
                // cookies.set("accessToken", newAccessToken, {
                //     httpOnly: false,
                //     maxAge: 14 * 24 * 60 * 60, // 7 days
                //     path: '/',
                //     sameSite: 'lax',
                //     secure: config.env === 'production',
                // });

                // Retry the original request with the new token
                // api.dispatch({
                //     type: "auth/tokenRefreshed",
                //     payload: newAccessToken,
                // });
                result = await baseQuery(args, api, extraOptions);
            } else {
                // Logout user if refresh token fails
                api.dispatch({ type: "auth/logout" });
            }
        } else {
            api.dispatch({ type: "auth/logout" });
            api.dispatch(removeUser());
        }
    }

    return result;
};


const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ["users", "admin", "games", "products"],
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        admin_support: builder.mutation<{ message: string }, {
            "firstName": string,
            "lastName"?: string,
            "email": string,
            "description": string
        }>({
            query: (data) => ({
                url: '/contact/create-contact',
                method: 'POST',
                body: data,
            }),
        }),

    })
});

export const { useAdmin_supportMutation } = baseApi;
export default baseApi;



