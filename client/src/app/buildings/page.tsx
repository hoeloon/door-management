"use client";

import React, { useState } from "react";
import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { Building, useGetBuildingsQuery } from "@/state/api";
import { Buildingcolumns } from "./buildingColums";
import Mapy from "../(components)/Map";

const Buildings = () => {
  const { data: buildings, isError, isLoading } = useGetBuildingsQuery();
  const [selected, setSelected] = useState<Building>();
  const handleEvent: GridEventListener<"rowClick"> = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    setSelected(params.row);
  };

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }
  return (
    <div className="flex flex-col">
      <Header name="Buildings" />
      <div className=" flex flex-col gap-5 md:flex-row h-auto items-center">
        <div>
          <DataGrid
            rows={buildings}
            columns={Buildingcolumns}
            getRowId={(row: Building) => row.buildingId}
            className="bg-gray-100 shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
            onRowClick={handleEvent}
            sx={{ overflow: "scroll" }}
          />
        </div>

        <div className="" style={{ width: "100%", height: "100%" }}>
          {buildings ? (
            <Mapy selected={selected} buildings={buildings}></Mapy>
          ) : (
            <div>no data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Buildings;
