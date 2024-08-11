import Link from "next/link";
import { Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
const headerCss = "bg-gray-300";

export const renderBuildingLink = (params: any) => {
  return (
    <Link
      href={`/buildings/${params.row.buildingName
        .replace(/\s+/g, "")
        .toLowerCase()}`}
    >
      <Button className="bg-gray-100">{params.row.building}</Button>
    </Link>
  );
};

export const Buildingcolumns: GridColDef[] = [
  {
    field: "buildingName",
    headerName: "Building",
    width: 400,
    headerClassName: headerCss,
    renderCell: renderBuildingLink,
  },
];
