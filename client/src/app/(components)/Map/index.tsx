import React, { useState } from "react";
import { Map as Mapx, Marker, Point } from "pigeon-maps";
import Link from "next/link";
import { Building } from "@/state/api";
import { MapPin } from "lucide-react";

type Props = { selected: Building | void; buildings: Building[] | [] };

const singaporeMapCenter: Point = [1.356913, 103.8164];

export const Mapy = ({ selected, buildings }: Props) => {
  const defaultZoom: number = 10;
  const selectedSwitcher = (building: Building) => {
    return selected?.buildingId === building.buildingId
      ? "red-100"
      : "blue-100";
  };
  return (
    <Mapx
      height={600}
      defaultCenter={singaporeMapCenter}
      defaultZoom={defaultZoom}
      zoom={selected ? 17 : defaultZoom}
      center={selected ? selected.corrdinates : singaporeMapCenter}
    >
      {buildings.map((building: Building) => {
        return (
          <Marker
            width={50}
            anchor={building.corrdinates}
            hover
            key={building.buildingId}
          >
            <div>
              <MapPin
                className={`w-9 h-9 ${
                  selected?.buildingId === building.buildingId
                    ? "fill-red-100"
                    : "fill-blue-100"
                }`}
              />
              <div
                className={`p-1 ${
                  selected?.buildingId === building.buildingId
                    ? "bg-red-100"
                    : "bg-blue-100"
                }`}
              >
                {building.buildingName}
              </div>
            </div>
          </Marker>
        );
      })}
    </Mapx>
  );
};

export default Mapy;
