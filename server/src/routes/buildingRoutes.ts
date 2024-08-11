import { Router } from "express";
import { getBuildings } from "../controllers/buildingController";

const router = Router();

router.get("/", getBuildings);

export default router;
