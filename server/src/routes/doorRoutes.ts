import { Router } from "express";
import { getDoors, getDoorById } from "../controllers/doorController";

const router = Router();

router.get("/", getDoors);
router.get("/:id", getDoorById);

export default router;
