import React, { useState } from "react";
import { Map as Mapx, Marker, Point } from "pigeon-maps";
import Link from "next/link";
import { Building } from "@/state/api";
import { MapPin } from "lucide-react";

type Props = { selected: Building | void; buildings: Building[] };

const singaporeMapCenter: Point = [1.356913, 103.8164];

export const Mapy = ({ selected, buildings }: Props) => {
  const defaultZoom: number = 10;
  const selectedSwitcher = (building: Building) => {
    return selected?.buildingId === building.buildingId
      ? "red-200"
      : "blue-200";
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
          <Marker width={50} anchor={building.corrdinates} hover>
            <div>
              <MapPin
                className={`w-9 h-9 fill-${selectedSwitcher(building)}`}
              />
              <div className={`p-1 bg-${selectedSwitcher(building)}`}>
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
