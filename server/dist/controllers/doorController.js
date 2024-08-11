"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDoorById = exports.getDoors = exports.doorResults = void 0;
const data_1 = require("../data");
exports.doorResults = data_1.doorList.map((door) => {
    if (door.apartmentId) {
        const apartment = data_1.apartmentList.find((apartment) => apartment.uuid === door.apartmentId);
        return Object.assign(Object.assign({}, door), { apartmentName: apartment ? apartment.apartmentName : null });
    }
    const building = data_1.buildingList.find((building) => building.uuid === door.buildingId);
    return Object.assign(Object.assign({}, door), { buildingName: building === null || building === void 0 ? void 0 : building.buildingName });
});
const getDoors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json(exports.doorResults);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving data" });
    }
});
exports.getDoors = getDoors;
const getDoorById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doorId = req.params.id;
        const result = exports.doorResults.find((door) => door.uuid == doorId);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving data" });
    }
});
exports.getDoorById = getDoorById;
