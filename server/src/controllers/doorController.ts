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
  const building = buildingList.find(
    (building: Building) => building.buildingId === door.buildingId
  );

  if (!door.apartmentId) {
    return {
      ...door,
      buildingName: building?.buildingName,
    };
  }
  const apartment = apartmentList.find(
    (apartment: Apartment) => apartment.apartmentId === door.apartmentId
  );
  return {
    ...door,
    buildingName: building?.buildingName,
    apartmentName: apartment ? apartment.apartmentName : null,
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
      (door: Door) => door.doorId == doorId
    );
    if (!result) {
      // const building = buildingList.find((building: Building) => {
      //   return building.buildingId === result.buildingId;
      // });
      // const newResult = {
      //   ...result,
      //   corrdinates: building?.corrdinates,
      // };
      res.json([]);
      return;
    }

    const building = buildingList.find((building: Building) => {
      return building.buildingId === result.buildingId;
    });
    const newResult = {
      ...result,
      corrdinates: building?.corrdinates,
    };
    res.json(newResult);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
