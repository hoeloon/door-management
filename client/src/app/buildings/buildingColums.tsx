import Link from "next/link";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
const headerCss = "bg-gray-300";

export const renderBuildingLink = (params: any) => {
  return (
    <Link href={`/buildings/${params.row.buildingId}`}>
      <Button className="bg-gray-100">{params.row.buildingName}</Button>
    </Link>
  );
};

export const Buildingcolumns: GridColDef[] = [
  {
    field: "buildingName",
    headerName: "Building",
    width: 200,
    headerClassName: headerCss,
    renderCell: renderBuildingLink,
  },
];
