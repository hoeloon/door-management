import { Request, Response } from "express";
import {
  Door,
  doorList,
  Apartment,
  apartmentList,
  buildingList,
  Building,
} from "../data";

export const doorResults = doorList.map((door: Door) => {
  if (door.apartmentId) {
    const apartment = apartmentList.find(
      (apartment: Apartment) => apartment.uuid === door.apartmentId
    );
    return {
      ...door,
      apartmentName: apartment ? apartment.apartmentName : null,
    };
  }
  const building = buildingList.find(
    (building: Building) => building.uuid === door.buildingId
  );
  return {
    ...door,
    buildingName: building?.buildingName,
  };
});

export const getDoors = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(doorResults);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};

export const getDoorById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const doorId: string = req.params.id;
    const result: Door | void = doorResults.find(
      (door: Door) => door.uuid == doorId
    );

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
