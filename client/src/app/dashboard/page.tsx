"use client";

import { Door, useGetDoorsQuery } from "@/state/api";
import Header from "../(components)/Header";
import PieChartRe from "../(components)/PieChart";
import BarChartRe from "../(components)/BarChart";
const Dashboard = () => {
  const { data: doors, isError, isLoading } = useGetDoorsQuery();
  if (isError) {
    return <div className="m-5">Failed to fetch data</div>;
  }

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  return (
    <div className="flex flex-col">
      <Header name="Dashboard" />
      {doors ? (
        <div>
          <div className="flex flex-col gap-5 items-center pt-10 md:flex-row">
            <div className="bg-gray-200 p-5 rounded-3xl text-center">
              <div className="font-semibold text-lg">Connection Status</div>
              <PieChartRe
                doors={doors}
                typeOfData="connectionStatus"
              ></PieChartRe>
            </div>
            <div className="bg-gray-200 p-5 rounded-3xl text-center">
              <div className="font-semibold text-lg">Connection Type</div>
              <PieChartRe
                doors={doors}
                typeOfData="connectionType"
              ></PieChartRe>
            </div>
          </div>

          <div className="bg-gray-200 p-5 rounded-3xl text-center overflow-auto mt-5 w-100 md:w-full">
            <div className="font-semibold text-lg">
              Connection Status of Building
            </div>
            <BarChartRe doors={doors}></BarChartRe>
          </div>
        </div>
      ) : (
        <>No data</>
      )}
    </div>
  );
};

export default Dashboard;
