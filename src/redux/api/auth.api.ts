
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

    verifyOtp: builder.mutation<{ message: string }, { otp: string }>({
      query: ({ otp }) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body: { otp },
      })
    }),

    forgotPassword: builder.mutation<{ message: string, data: { token: string } }, { email: string }>({
      query: ({ email }) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body: { email },
      }),
    }),

    resetPassword: builder.mutation({
      query: ({ newPassword, confirmPassword }) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: {
          "newPassword": newPassword,
          "confirmPassword": confirmPassword
        }
      }),
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

    myProfile: builder.query<{ message: string, data: IUserDetails }, {}>({
      query: (query) => ({
        url: '/users/my-profile',
        method: 'GET',
        params: query
      }),
      providesTags: ['admin']
    }),

    changePassword: builder.mutation({
      query: (data) => ({
        url: '/auth/change-password',
        method: 'PATCH',
        body: data
      }),
    }),

    updateProfile: builder.mutation({
      query: ({ data }) => ({
        url: '/users/update-my-profile',
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['admin']
    }),

  }),
});

export const {
  useGetAllUserQuery,
  useDeleteUserByIdMutation,
  useLoginAdminMutation,
  useBlockUserMutation,
  useMyProfileQuery,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation
} = authApi;
