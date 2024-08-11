import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import Link from "next/link";
import { renderBuildingLink } from "../buildings/buildingColums";

const headerCss = "bg-gray-300";

const renderActionButton = (params: any) => {
  return (
    <Link href={`/doors/${params.row.doorId}`}>
      <Button className="bg-gray-100">Details</Button>
    </Link>
  );
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
    field: "doorId",
    headerName: "Action",
    width: 100,
    headerClassName: headerCss,
    renderCell: renderActionButton,
  },
];
