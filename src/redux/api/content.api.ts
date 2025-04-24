import baseApi from "./baseApi";



const contentApi = baseApi.injectEndpoints({

    endpoints: (builder) => ({
        getPrivacyContents: builder.query<{ data: {value : string} }, void>({
            query: () => ({
                url: `/setting/privacy`,
                method: "GET"
            }),
            providesTags: ['privacy'],
        }),

        updatePrivacyContent: builder.mutation({
            query: (data) => ({
                url: `/setting`,
                method: "PATCH",
                body: {
                    "key": "privacy",// about, privacy, 
                    "value": data
                },
            }),
            invalidatesTags: ["privacy"],
        }),


        getAboutContents: builder.query<{data : {value : string}}, void>({
            query: () => ({
                url: `/setting/about`,
                method: "GET"
            }),
            providesTags: ["about"],
        }),

        updateAboutContent: builder.mutation({
            query: (data) => ({
                url: `/setting`,
                method: "PATCH",
                body: {
                    "key": "about",// about, privacy, 
                    "value": data
                },
            }),
            invalidatesTags: ["about"],
        }),

        getTermsContents: builder.query<{data : {value : string}}, void>({
            query: () => ({
                url: `/setting/terms`,
                method: "GET"
            }),
            providesTags: ["terms"],
        }),

        updateTermsContent: builder.mutation({
            query: (data) => ({
                url: `/setting`,
                method: "PATCH",
                body: {
                    "key": "terms",// about, privacy, 
                    "value": data
                },
            }),
            invalidatesTags: ['terms'],
        }),
    }),
});

export const { useGetPrivacyContentsQuery, useUpdatePrivacyContentMutation, useGetAboutContentsQuery, useUpdateAboutContentMutation, useGetTermsContentsQuery, useUpdateTermsContentMutation } = contentApi;
