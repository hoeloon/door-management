import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Door {
  doorName: string;
  buildingName: string;
  connectionType: string;
  connectionStatus: string;
  lastUpdate: string;
  apartmentName: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Doors"],
  endpoints: (build) => ({
    getDoors: build.query<Door[], string | void>({
      query: (search) => ({
        url: "/doors",
        params: search ? { search } : {},
      }),
      providesTags: ["Doors"],
    }),
  }),
});

export const { useGetDoorsQuery } = api;
