import { Router } from "express";
import {
  getBuildings,
  getBuildingById,
} from "../controllers/buildingController";

const router = Router();

router.get("/", getBuildings);
router.get("/:id", getBuildingById);

export default router;
