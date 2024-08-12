import { Request, Response } from "express";
import {
  Apartment,
  apartmentList,
  Door,
  doorList,
  buildingList,
} from "../data";
import { doorResults } from "./doorController";

export const getBuildings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    res.json(buildingList);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};

export const getBuildingById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const buildingId: string = req.params.id;

    const results = doorResults.filter(
      (door: Door) => door.buildingId === buildingId
    );

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
