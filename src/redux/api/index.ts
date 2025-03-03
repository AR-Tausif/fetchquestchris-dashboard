import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { RootState } from "../store";

// Define a service using a base URL and expected endpoints
export const baseURL = "http://159.223.184.53:5008/api/v1";

const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: (headers, { getState }) => {
    // const token = (getState() as RootState).auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    // if (token) {
    //   headers.set("authorization", `${token}`);
    // }

    return headers;
  },
  credentials: "include",
});


export const victoriaApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["users"],
  baseQuery,
  endpoints: () => ({}), // Endpoints are builded separate folder of each features "AuthAPI.ts" file
});


