import { meta, OrderType } from "../../types";
import baseApi from "./baseApi";

const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        //   loginAdmin: builder.mutation<{ message: string, data: { user: IUserDetails, accessToken: string, refreshToken: string } }, { email: string, password: string }>({
        //     query: (body) => ({
        //       url: `/auth/admin/login`,
        //       method: "POST",
        //       body
        //     }),
        //     invalidatesTags: ["admin"],
        //   }),

        getAllOrders: builder.query<{ message: string, data: { data: OrderType[] }, meta: meta }, {}>({
            query: (params) => ({
                url: `/orders`,
                method: "GET",
                params
            }),
            providesTags: ["orders"],
        }),

        editOrderStatus: builder.mutation<{ message: string }, { id: string, body: any }>({
            query: ({ id, body }) => ({
                url: `/orders/status/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["orders"],
        }),

    }),
});

export const {
    useGetAllOrdersQuery,
    useEditOrderStatusMutation
} = orderApi;
