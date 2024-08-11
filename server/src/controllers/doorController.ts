import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { doorData } from "./data";

// const prisma = new PrismaClient();

export const getDoors = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json(doorData);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
