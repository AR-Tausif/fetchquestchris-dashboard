import { meta, ProductType } from "../../types";
import baseApi from "./baseApi";

const productApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        getAllProducts: builder.query<{ message: string, data: { data: ProductType[] }, meta: meta }, {}>({
            query: (params) => ({
                url: `/products`,
                method: "GET",
                params
            }),
            providesTags: ["products"],
        }),

        editProduct: builder.mutation<{ message: string }, { id: string, body: any }>({
            query: ({ id, body }) => ({
                url: `/products/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["products"],
        }),

        createProduct: builder.mutation<{ message: string }, { body: any }>({
            query: ({ body }) => ({
                url: `/products`,
                method: "POST",
                body
            }),
            invalidatesTags: ["products"],
        }),

        deleteProduct: builder.mutation<{ message: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["products"],
        }),


    }),
});

export const {
    useGetAllProductsQuery,
    useEditProductMutation,
    useCreateProductMutation,
    useDeleteProductMutation
} = productApi;
