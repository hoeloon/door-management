"use client";

import { useGetDoorDetailQuery } from "@/state/api";
import React from "react";

type Props = {
  id: string;
};

const DoorDetail = ({ params }: { params: Props }) => {
  const {
    data: doorDetail,
    isError,
    isLoading,
  } = useGetDoorDetailQuery(params.id);
  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }
  return (
    <div className="flex flex-col">
      <span>{doorDetail?.uuid}</span>
      <span>{doorDetail?.buildingName}</span>
      <span>{doorDetail?.connectionType}</span>
      <span>{doorDetail?.connectionStatus}</span>
      <span>{doorDetail?.lastUpdate}</span>
      <span>{doorDetail?.apartmentName}</span>
    </div>
  );
};

export default DoorDetail;
