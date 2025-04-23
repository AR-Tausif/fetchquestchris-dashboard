import { GameType, meta } from "../../types";
import baseApi from "./baseApi";

const gameApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

        //   loginAdmin: builder.mutation<{ message: string, data: { user: IUserDetails, accessToken: string, refreshToken: string } }, { email: string, password: string }>({
        //     query: (body) => ({
        //       url: `/auth/admin/login`,
        //       method: "POST",
        //       body
        //     }),
        //     invalidatesTags: ["admin"],
        //   }),

        getAllGames: builder.query<{ message: string, data: { data: GameType[] }, meta: meta }, {}>({
            query: (params) => ({
                url: `/games`,
                method: "GET",
                params
            }),
            providesTags: ["games"],
        }),

        editGame: builder.mutation<{ message: string }, { id: string, body: any }>({
            query: ({ id, body }) => ({
                url: `/games/${id}`,
                method: "PATCH",
                body
            }),
            invalidatesTags: ["games"],
        }),

        createGame: builder.mutation<{ message: string }, { body: any }>({
            query: ({ body }) => ({
                url: `/games`,
                method: "POST",
                body
            }),
            invalidatesTags: ["games"],
        }),

        deleteGame: builder.mutation<{ message: string }, { id: string }>({
            query: ({ id }) => ({
                url: `/games/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["games"],
        }),


    }),
});

export const {
    useGetAllGamesQuery,
    useEditGameMutation,
    useCreateGameMutation,
    useDeleteGameMutation
} = gameApi;
