"use client";

import React from "react";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetDoorsQuery } from "@/state/api";
import { doorColumns } from "./doorColums";

const Doors = () => {
  const { data: doors, isError, isLoading } = useGetDoorsQuery();
  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }
  return (
    <div className="flex flex-col">
      <Header name="Doors" />
      <DataGrid
        rows={doors}
        columns={doorColumns}
        getRowId={(row) => row.doorId}
        className="bg-gray-100 shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Doors;
