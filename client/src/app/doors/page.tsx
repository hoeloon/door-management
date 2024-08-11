"use client";

import React from "react";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetDoorsQuery } from "@/state/api";

const headerCss = "bg-gray-300";

const columns: GridColDef[] = [
  {
    field: "doorName",
    headerName: "Name",
    width: 90,
    headerClassName: headerCss,
  },
  {
    field: "buildingName",
    headerName: "Building",
    width: 200,
    headerClassName: headerCss,
  },
  {
    field: "connectionType",
    headerName: "Connection Type",
    width: 200,
    headerClassName: headerCss,
  },
  {
    field: "connectionStatus",
    headerName: "Connection Status",
    width: 200,
    headerClassName: headerCss,
  },
  {
    field: "lastUpdate",
    headerName: "Last Update",
    width: 200,
    headerClassName: headerCss,
  },
  {
    field: "apartmentName",
    headerName: "Apartment",
    width: 200,
    headerClassName: headerCss,
  },
  {
    field: "uuid",
    headerName: "ID",
    width: 300,
    headerClassName: headerCss,
  },
];

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
        columns={columns}
        getRowId={(row) => row.uuid}
        className="bg-gray-100 shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default Doors;
