"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const doorController_1 = require("../controllers/doorController");
const router = (0, express_1.Router)();
router.get("/", doorController_1.getDoors);
exports.default = router;
