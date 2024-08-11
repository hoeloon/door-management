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
exports.getBuildingByName = exports.getBuildings = void 0;
const data_1 = require("../data");
const uuid_1 = require("uuid");
const getBuildings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buildingNames = data_1.doorList.map((door) => door.buildingName);
        const setResults = Array.from(new Set(buildingNames));
        const results = setResults.map((item) => ({
            buildingName: item,
            uuid: (0, uuid_1.v4)(),
        }));
        res.json(results);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving data" });
    }
});
exports.getBuildings = getBuildings;
const getBuildingByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const buildingName = req.params.buildingName;
        const normalizedQuery = buildingName.replace(/\s+/g, "").toLowerCase();
        console.log("normalizedQuery", normalizedQuery);
        const results = data_1.doorList.filter((door) => {
            const normalizedBuildingName = door.buildingName
                .replace(/\s+/g, "")
                .toLowerCase();
            console.log(normalizedBuildingName, "vs", normalizedQuery);
            return normalizedBuildingName === normalizedQuery;
        });
        const resultsWithApartmentName = results.map((door) => {
            if (door.apartmentId) {
                const apartment = data_1.apartmentList.find((apartment) => apartment.uuid === door.apartmentId);
                return Object.assign(Object.assign({}, door), { apartmentName: apartment ? apartment.apartmentName : null });
            }
            return door;
        });
        res.json(resultsWithApartmentName);
    }
    catch (error) {
        res.status(500).json({ message: "Error retrieving data" });
    }
});
exports.getBuildingByName = getBuildingByName;
