import { Button, Chip } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { renderBuildingLink } from "../buildings/buildingColums";
import CustomChip from "../(components)/CustomChip";
import { Cable, Signal } from "lucide-react";
import dayjs from "dayjs";

const headerCss = "bg-gray-300";

const renderActionButton = (params: any) => {
  return (
    <Link
      href={`/doors/${params.row.doorId}`}
      className="text-blue-700 font-semibold underline"
    >
      Details
    </Link>
  );
};

const renderConnectionStatus = (params: any) => {
  return (
    <CustomChip
      text={params.row.connectionStatus}
      bgColor={`${
        params.row.connectionStatus === "Online"
          ? "bg-green-300"
          : "bg-gray-300"
      }`}
    />
  );
};

const renderConnectionType = (params: any) => {
  return (
    <div className="flex justify-start items-center gap-4">
      {" "}
      {params.row.connectionType === "Wired" ? (
        <Cable className="w-4 h-4" />
      ) : (
        <Signal className="w-4 h-4" />
      )}
      {params.row.connectionType}
    </div>
  );
};

const renderLastUpdate = (params: any) => {
  const readableDate = dayjs(params.row.lastUpdate).format(
    "MMMM D, YYYY h:mm A"
  );
  return <div>{readableDate}</div>;
};

export const doorColumns: GridColDef[] = [
  {
    field: "doorName",
    headerName: "Name",
    width: 150,
    headerClassName: headerCss,
  },
  {
    field: "buildingName",
    headerName: "Building",
    width: 250,
    headerClassName: headerCss,
    renderCell: renderBuildingLink,
  },
  {
    field: "connectionType",
    headerName: "Connection Type",
    width: 130,
    headerClassName: headerCss,
    renderCell: renderConnectionType,
  },
  {
    field: "connectionStatus",
    headerName: "Connection Status",
    width: 130,
    headerClassName: headerCss,
    renderCell: renderConnectionStatus,
  },
  {
    field: "lastUpdate",
    headerName: "Last Update",
    width: 200,
    headerClassName: headerCss,
    renderCell: renderLastUpdate,
  },
  {
    field: "apartmentName",
    headerName: "Apartment",
    width: 200,
    headerClassName: headerCss,
  },
  {
    field: "doorId",
    headerName: "Action",
    width: 100,
    headerClassName: headerCss,
    renderCell: renderActionButton,
  },
];
