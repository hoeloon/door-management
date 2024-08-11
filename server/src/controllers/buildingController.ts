import { Request, Response } from "express";
import { Door, doorList } from "../data";
import { v4 as uuidv4 } from "uuid";

export const getBuildings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const buildingNames = doorList.map((door: Door) => door.buildingName);
    const setResults = Array.from(new Set(buildingNames));
    const results = setResults.map((item) => ({
      building: item,
      uuid: uuidv4(),
    }));
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};

export const getBuildingByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const buildingName: string = req.params.buildingName;
    const normalizedQuery = buildingName.replace(/\s+/g, "").toLowerCase();
    console.log("normalizedQuery", normalizedQuery);
    const results = doorList.filter((door) => {
      const normalizedBuildingName = door.buildingName
        .replace(/\s+/g, "")
        .toLowerCase();
      console.log(normalizedBuildingName, "vs", normalizedQuery);
      return normalizedBuildingName === normalizedQuery;
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
