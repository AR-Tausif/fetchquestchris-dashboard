
import { IUserDetails, meta } from "../../types";
import baseApi from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    loginAdmin: builder.mutation<{ message: string, data: { user: IUserDetails, accessToken: string, refreshToken: string } }, { email: string, password: string }>({
      query: (body) => ({
        url: `/auth/admin/login`,
        method: "POST",
        body
      }),
      invalidatesTags: ["admin"],
    }),

    getAllUser: builder.query<{ message: string, data: { data: IUserDetails[] }, meta: meta }, {}>({
      query: (params) => ({
        url: `/users`,
        method: "GET",
        params
      }),
      providesTags: ["users"],
    }),

    deleteUserById: builder.mutation({
      query: (userId) => ({
        url: `/user/deleting-user/${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),

    blockUser: builder.mutation<{ message: string }, { id: string, updatedData: { status: 1 | 0 } }>({
      query: (payload) => ({
        url: `/users/status/${payload?.id}`,
        method: "PATCH",
        body: payload?.updatedData
      }),
      invalidatesTags: ["users"],
    }),

    makeAdminUserById: builder.mutation({
      query: (userId) => ({
        url: `/user/make-admin/${userId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),


  }),
});

export const {
  useGetAllUserQuery,
  useDeleteUserByIdMutation,
  useMakeAdminUserByIdMutation,
  useLoginAdminMutation,
  useBlockUserMutation
} = authApi;
