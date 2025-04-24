import { BlogType, meta } from "../../types";
import baseApi from "./baseApi";

const blogApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        //   loginAdmin: builder.mutation<{ message: string, data: { user: IUserDetails, accessToken: string, refreshToken: string } }, { email: string, password: string }>({
        //     query: (body) => ({
        //       url: `/auth/admin/login`,
        //       method: "POST",
        //       body
        //     }),
        //     invalidatesTags: ["admin"],
        //   }),

        getAllBlogs: builder.query<{ message: string, data: { data: BlogType[] }, meta: meta }, {}>({
            query: (params) => ({
                url: `/blogs`,
                method: "GET",
                params
            }),
            providesTags: ["blogs"],
        }),

        editBlog: builder.mutation<{ message: string }, { id: string, body: any }>({
            query: ({ id, body }) => ({
                url: `/blogs/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["blogs"],
        }),

        createBlog: builder.mutation<{ message: string }, { body: any }>({
            query: ({ body }) => ({
                url: `/blogs`,
                method: "POST",
                body
            }),
            invalidatesTags: ["blogs"],
        }),

        deleteBlog: builder.mutation<{ message: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/blogs/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["blogs"],
        }),


    }),
});

export const {
    useGetAllBlogsQuery,
    useEditBlogMutation,
    useCreateBlogMutation,
    useDeleteBlogMutation
} = blogApi;
