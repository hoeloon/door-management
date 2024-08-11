"use client";

import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetBuildingsByNameQuery } from "@/state/api";
import React from "react";
import { doorColumns } from "@/app/doors/doorColums";

type Props = {
  buildingName: string;
};
const BuildingsByName = ({ params }: { params: Props }) => {
  const {
    data: doors,
    isError,
    isLoading,
  } = useGetBuildingsByNameQuery(params.buildingName);
  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }
  return (
    <div className="flex flex-col">
      <Header name="Doors" />
      <DataGrid
        rows={doors}
        columns={doorColumns}
        getRowId={(row) => row.uuid}
        className="bg-gray-100 shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
      />
    </div>
  );
};

export default BuildingsByName;
