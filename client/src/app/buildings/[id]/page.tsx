"use client";

import Header from "@/app/(components)/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetBuildingsByNameQuery } from "@/state/api";
import React from "react";
import { doorColumns } from "@/app/doors/doorColums";
import PieChartRe from "@/app/(components)/PieChart";

type Props = {
  id: string;
};
const BuildingsByName = ({ params }: { params: Props }) => {
  const {
    data: doors,
    isError,
    isLoading,
  } = useGetBuildingsByNameQuery(params.id);
  if (isError) {
    return <div className="m-5">Failed to fetch data</div>;
  }

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }
  return (
    <div className="flex flex-col">
      <Header name={`Doors @ ${doors ? doors[0].buildingName : ""}`} />
      {doors ? (
        <>
          {" "}
          <div className="flex flex-col">
            <div className="flex flex-col gap-5  items-center pt-10 md:flex-row">
              <div className="bg-gray-200 p-10 rounded-3xl text-center ">
                <div className="font-semibold text-lg">Connection Status</div>
                <PieChartRe
                  doors={doors}
                  typeOfData="connectionStatus"
                ></PieChartRe>
              </div>
              <div className="bg-gray-200 p-10 rounded-3xl text-center">
                <div className="font-semibold text-lg">Connection Type</div>
                <PieChartRe
                  doors={doors}
                  typeOfData="connectionType"
                ></PieChartRe>
              </div>
            </div>

            <DataGrid
              rows={doors}
              columns={doorColumns}
              getRowId={(row) => row.doorId}
              className="bg-gray-100 shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
            />
          </div>
        </>
      ) : (
        <>No Data</>
      )}
    </div>
  );
};

export default BuildingsByName;
