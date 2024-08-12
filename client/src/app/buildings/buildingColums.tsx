import Link from "next/link";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
const headerCss = "bg-gray-300";

export const renderBuildingLink = (params: any) => {
  return (
    <Link
      href={`/buildings/${params.row.buildingId}`}
      className="text-blue-700 font-semibold underline"
    >
      {params.row.buildingName}
    </Link>
  );
};

export const Buildingcolumns: GridColDef[] = [
  {
    field: "buildingName",
    headerName: "Building",
    width: 300,
    headerClassName: headerCss,
    renderCell: renderBuildingLink,
  },
];
