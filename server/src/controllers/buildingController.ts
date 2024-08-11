import { Request, Response } from "express";
import { Apartment, apartmentList, Door, doorList } from "../data";
import { v4 as uuidv4 } from "uuid";

export const getBuildings = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const buildingNames = doorList.map((door: Door) => door.buildingName);
    const setResults = Array.from(new Set(buildingNames));
    const results = setResults.map((item) => ({
      buildingName: item,
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
    const resultsWithApartmentName = results.map((door: Door) => {
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
    res.json(resultsWithApartmentName);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
