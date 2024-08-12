"use client";

import Header from "@/app/(components)/Header";
import { Building, useGetDoorDetailQuery } from "@/state/api";
import React from "react";
import { Clipboard } from "flowbite-react";
import { Cable, MapPin, Signal } from "lucide-react";
import CustomChip from "@/app/(components)/CustomChip";
import dayjs from "dayjs";
import { Map as Mapx, Marker, Point } from "pigeon-maps";

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
  const TextBox = ({
    label,
    value,
  }: {
    label: string;
    value: string | void;
  }) => {
    return (
      <div>
        {" "}
        <div className="grid w-auto">
          <div className="pb-1">{label}:</div>
          <div className="relative inline-block">
            <label htmlFor="npm-install" className="sr-only">
              Label
            </label>
            <input
              id="clipboard"
              type="text"
              className="col-span-6 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500"
              value={value || ""}
              disabled
              readOnly
            />
            {/* eslint-disable-next-line no-use-before-define */}
            <Clipboard.WithIcon
              className="absolute inset-y-1 right-0 py-1 px-3 flex items-center pointer-events-non bg-gray-100"
              valueToCopy={value || ""}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className=" flex flex-col pt-10 gap-4 lg:flex-row ">
        <div className="flex flex-col gap-5 bg-gray-200 p-10 rounded-3xl ">
          {" "}
          <Header
            name={
              `${doorDetail?.doorName} @ ${doorDetail?.buildingName} ` || ""
            }
          />
          <TextBox label="Door Id" value={doorDetail?.doorId} />
          <TextBox label="Door Name" value={doorDetail?.doorName} />
          <TextBox label="Building Name" value={doorDetail?.buildingName} />
          <div className="flex gap-5">
            {" "}
            {"Connection Type: "}
            <div className="flex justify-start items-center gap-4">
              {doorDetail?.connectionType === "Wired" ? (
                <Cable className="w-4 h-4" />
              ) : (
                <Signal className="w-4 h-4" />
              )}
              {doorDetail?.connectionType}
            </div>
          </div>
          <div className="flex gap-5 items-center">
            {"Connection status: "}
            <CustomChip
              text={doorDetail?.connectionStatus}
              bgColor={`${
                doorDetail?.connectionStatus === "Online"
                  ? "bg-green-300"
                  : "bg-gray-300"
              }`}
            />
          </div>
          <TextBox
            label="Last Update"
            value={dayjs(doorDetail?.lastUpdate).format("MMMM D, YYYY h:mm A")}
          />
          <div>{doorDetail?.apartmentName}</div>
        </div>
        <div className="" style={{ width: "100%" }}>
          <Mapx
            height={600}
            defaultCenter={doorDetail?.corrdinates}
            defaultZoom={17}
            center={doorDetail?.corrdinates}
          >
            <Marker
              width={50}
              anchor={doorDetail?.corrdinates}
              hover
              key={doorDetail?.buildingId}
            >
              <div>
                <MapPin className="w-9 h-9 fill-red-100" />
                <div className="p-1 bg-red-100">{doorDetail?.buildingName}</div>
              </div>
            </Marker>
          </Mapx>
        </div>
      </div>
    </div>
  );
};

export default DoorDetail;
