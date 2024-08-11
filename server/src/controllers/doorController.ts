import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export const getDoors = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json({ hello: "world" });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data" });
  }
};
