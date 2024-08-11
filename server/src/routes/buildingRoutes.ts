import { Router } from "express";
import {
  getBuildings,
  getBuildingByName,
} from "../controllers/buildingController";

const router = Router();

router.get("/", getBuildings);
router.get("/:buildingName", getBuildingByName);

export default router;
