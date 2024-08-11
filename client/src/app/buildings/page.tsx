"use client";

import React from "react";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetBuildingsQuery } from "@/state/api";

const headerCss = "bg-gray-300";

const columns: GridColDef[] = [
  {
    field: "building",
    headerName: "Building",
    width: 400,
    headerClassName: headerCss,
  },
];

const Buildings = () => {
  const { data: buildings, isError, isLoading } = useGetBuildingsQuery();
  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }
  return (
    <div className="flex flex-col">
      <Header name="Buildings" />
      <DataGrid
        rows={buildings}
        columns={columns}
        getRowId={(row) => row.uuid}
        className="bg-gray-100 shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Buildings;
