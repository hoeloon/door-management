import { Request, Response } from "express";
import { Door, doorList, Apartment, apartmentList } from "../data";

export const getDoors = async (req: Request, res: Response): Promise<void> => {
  try {
    const results = doorList.map((door: Door) => {
      if (door.apartmentId) {
        const apartment = apartmentList.find(
          (apartment: Apartment) => apartment.uuid === door.apartmentId
        );
        return {
          ...door,
          apartmentName: apartment ? apartment.apartmentName : null,
        };
      }
      return door;
    });
    res.json(results);
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
    const result = doorList.find((door: Door) => door.uuid == doorId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
