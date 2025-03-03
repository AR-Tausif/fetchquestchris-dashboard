import { victoriaApi } from ".";

const authApi = victoriaApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: `/user/all-user`,
        method: "GET",
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
} = authApi;
