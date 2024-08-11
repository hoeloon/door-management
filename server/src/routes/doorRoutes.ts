import { Router } from "express";
import { getDoors } from "../controllers/doorController";

const router = Router();

router.get("/", getDoors);

export default router;
