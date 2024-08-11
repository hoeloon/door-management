import { Request, Response } from "express";
import { Door, doorList } from "../data";

export const getBuildings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const buildingNames = doorList.map((door: Door) => door.buildingName);
    const results = Array.from(new Set(buildingNames));
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
