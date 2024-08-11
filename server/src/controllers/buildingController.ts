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
