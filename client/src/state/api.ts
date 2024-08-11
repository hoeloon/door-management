import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Door {
  doorName: string;
  buildingName: string;
  connectionType: string;
  connectionStatus: string;
  lastUpdate: string;
  apartmentName: string;
  uuid: string;
}
export interface Building {
  doorName: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["Doors", "Buildings"],
  endpoints: (build) => ({
    getDoors: build.query<Door[], string | void>({
      query: () => ({
        url: "/doors",
      }),
      providesTags: ["Doors"],
    }),
    getDoorDetail: build.query<Door, string>({
      query: (id) => ({
        url: `/doors/${id}`,
      }),
      providesTags: ["Doors"],
    }),
    getBuildings: build.query<Door[], string | void>({
      query: () => ({
        url: "/buildings",
      }),
      providesTags: ["Buildings"],
    }),
  }),
});

export const { useGetDoorsQuery, useGetDoorDetailQuery, useGetBuildingsQuery } =
  api;
