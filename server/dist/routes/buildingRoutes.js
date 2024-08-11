"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buildingController_1 = require("../controllers/buildingController");
const router = (0, express_1.Router)();
router.get("/", buildingController_1.getBuildings);
router.get("/:id", buildingController_1.getBuildingById);
exports.default = router;
