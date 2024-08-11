"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apartmentList = exports.doorList = void 0;
/* doorName:
 B1 Ramp,
 B1 Staircase,
 Side Gate A,
 Side Gate B,
 Side Gate C,
 Side Gate D,
 Main Gate,
 Roof Access,
 Garage,
 Gym,
*/
/*
 buildingName:
 238 Orchard Blvd(ION),
 19 Oxley Rd(Orchard Court),
 19B Mount Sinai Rise, Singapore 276921(Ridgewood Condo),
 96 Dawson Rd(SkyParc @ Dawson),
 22 Orange Grove Rd, Singapore 258350(Shangri-La Singapore),
 180 Kitchener Rd, Singapore 208539 (City Square Mall),
 500 Jln Sultan, Singapore 199020(Hotel Boss),
 13 Tanjong Katong Rd, Singapore 437158(Katong Regency),
 2 Leonie Hill Rd, Singapore 239192(Leonie Condotel)
*/
exports.doorList = [
    {
        uuid: "209ea245-fc42-4b9f-a215-00929d75d9cc",
        doorName: "B1 Ramp",
        buildingName: "238 Orchard Blvd",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T10:00:00Z",
        apartmentId: "",
    },
    {
        uuid: "23a95188-04cc-407a-bfa4-4803b1dce8dc",
        doorName: "B1 Staircase",
        buildingName: "238 Orchard Blvd",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T09:55:00Z",
        apartmentId: "",
    },
    {
        uuid: "b86e8ec8-80c1-4a50-9862-81858ff9d283",
        doorName: "Side Gate A",
        buildingName: "238 Orchard Blvd",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T09:50:00Z",
        apartmentId: "",
    },
    {
        uuid: "e322f5a5-ec53-4681-8315-84993fd310e8",
        doorName: "Side Gate B",
        buildingName: "238 Orchard Blvd",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T09:45:00Z",
        apartmentId: "",
    },
    {
        uuid: "d0d1f9c7-b1ee-4387-9791-0fbe4c2d21de",
        doorName: "Side Gate C",
        buildingName: "19 Oxley Rd",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T09:40:00Z",
        apartmentId: "",
    },
    {
        uuid: "8b924ba2-c480-4783-8369-6aa706c4f052",
        doorName: "Side Gate D",
        buildingName: "19 Oxley Rd",
        connectionType: "Wireless",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T09:35:00Z",
        apartmentId: "",
    },
    {
        uuid: "2b55689a-594b-4c73-b941-a595ffefd08f",
        doorName: "Main Gate",
        buildingName: "19 Oxley Rd",
        connectionType: "Wired",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T09:30:00Z",
        apartmentId: "",
    },
    {
        uuid: "619e2ab0-186e-4e4a-9a87-f8dc1faced5b",
        doorName: "Roof Access",
        buildingName: "19 Oxley Rd",
        connectionType: "Wireless",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T09:25:00Z",
        apartmentId: "",
    },
    {
        uuid: "c000bf11-5a3c-4f41-9e6a-a5f6132458e9",
        doorName: "Garage",
        buildingName: "19B Mount Sinai Rise",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T09:20:00Z",
        apartmentId: "",
    },
    {
        uuid: "3704f924-5fa4-44bc-b9d7-ffba16c3a32c",
        doorName: "Gym",
        buildingName: "19B Mount Sinai Rise",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T09:15:00Z",
        apartmentId: "",
    },
    {
        uuid: "cb2bdbcb-b0e4-4a67-a4d5-746a6c56efe0",
        doorName: "B1 Ramp",
        buildingName: "96 Dawson Rd",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T09:10:00Z",
        apartmentId: "",
    },
    {
        uuid: "80156679-a41a-41b1-b543-45aeb5cdf897",
        doorName: "B1 Staircase",
        buildingName: "96 Dawson Rd",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T09:05:00Z",
        apartmentId: "",
    },
    {
        uuid: "bfa8b81a-5716-4401-8763-1586e39b9f7a",
        doorName: "Side Gate A",
        buildingName: "96 Dawson Rd",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T09:00:00Z",
        apartmentId: "",
    },
    {
        uuid: "ab5c9922-18e2-4b02-9c52-318e9a2861e6",
        doorName: "Side Gate B",
        buildingName: "96 Dawson Rd",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T08:55:00Z",
        apartmentId: "",
    },
    {
        uuid: "b4a829fe-ffcf-49b2-b7e9-6d5580778cb0",
        doorName: "Side Gate C",
        buildingName: "22 Orange Grove Rd",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T08:50:00Z",
        apartmentId: "",
    },
    {
        uuid: "ff6f81ee-a184-450b-a4fe-d6953b93a8b2",
        doorName: "Side Gate D",
        buildingName: "22 Orange Grove Rd",
        connectionType: "Wireless",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T08:45:00Z",
        apartmentId: "",
    },
    {
        uuid: "c721b406-3550-4099-81cd-8ab8e368825d",
        doorName: "Main Gate",
        buildingName: "22 Orange Grove Rd",
        connectionType: "Wired",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T08:40:00Z",
        apartmentId: "",
    },
    {
        uuid: "c3ee23a3-7f17-4bf1-8aa1-5ece837ab675",
        doorName: "Roof Access",
        buildingName: "22 Orange Grove Rd",
        connectionType: "Wireless",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T08:35:00Z",
        apartmentId: "",
    },
    {
        uuid: "a474bda9-f755-4eb8-a8b0-610d3ec50884",
        doorName: "Garage",
        buildingName: "180 Kitchener Rd",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T08:30:00Z",
        apartmentId: "",
    },
    {
        uuid: "f2ff3cd0-38e4-4110-9310-c1ec28da2d60",
        doorName: "Gym",
        buildingName: "180 Kitchener Rd",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T08:25:00Z",
        apartmentId: "",
    },
    {
        uuid: "3e0ed7b2-b41f-4b2d-82e1-4a9822429d4c",
        doorName: "B1 Ramp",
        buildingName: "500 Jln Sultan",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T08:20:00Z",
        apartmentId: "",
    },
    {
        uuid: "a0066764-0b32-4721-ad29-1f860fd0bc43",
        doorName: "B1 Staircase",
        buildingName: "500 Jln Sultan",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T08:15:00Z",
        apartmentId: "",
    },
    {
        uuid: "61322e7e-890a-4b5c-8eb2-fb4ee8da297b",
        doorName: "Side Gate A",
        buildingName: "500 Jln Sultan",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T08:10:00Z",
        apartmentId: "",
    },
    {
        uuid: "77e8be25-071e-4b01-b32b-cc61711353e6",
        doorName: "Side Gate B",
        buildingName: "500 Jln Sultan",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T08:05:00Z",
        apartmentId: "",
    },
    {
        uuid: "b43e78c1-e5e8-48b0-a536-5ff5e1259be8",
        doorName: "Side Gate C",
        buildingName: "13 Tanjong Katong Rd",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T08:00:00Z",
        apartmentId: "",
    },
    {
        uuid: "89a954bd-7550-4a8d-be18-1d4cb0dd180b",
        doorName: "Side Gate D",
        buildingName: "13 Tanjong Katong Rd",
        connectionType: "Wireless",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T07:55:00Z",
        apartmentId: "",
    },
    {
        uuid: "59b9cbd9-2931-4d31-8f5c-1b3302e003f5",
        doorName: "Main Gate",
        buildingName: "13 Tanjong Katong Rd",
        connectionType: "Wired",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T07:50:00Z",
        apartmentId: "",
    },
    {
        uuid: "a772e248-b512-48c8-b188-3e44ae1eeddc",
        doorName: "Roof Access",
        buildingName: "13 Tanjong Katong Rd",
        connectionType: "Wireless",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T07:45:00Z",
        apartmentId: "",
    },
    {
        uuid: "6f283677-c98b-4306-9940-dad0c3d3f917",
        doorName: "Main Entrance",
        buildingName: "2 Leonie Hill Rd",
        connectionType: "Wired",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T07:40:00Z",
        apartmentId: "054fb30d-c5e5-4643-9c43-b3d858c883f7",
    },
    {
        uuid: "09c9dfde-3a79-408d-973f-d020ab72d574",
        doorName: "Main Entrance",
        buildingName: "2 Leonie Hill Rd",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T07:35:00Z",
        apartmentId: "902f7678-7d23-49f9-84d0-404bbc309c4c",
    },
    {
        uuid: "6b7049f6-4e40-4d1b-a5c0-cef89a90d5fb",
        doorName: "Unit Entrance",
        buildingName: "67 W Coast Wy",
        connectionType: "Wireless",
        connectionStatus: "Offline",
        lastUpdate: "2024-08-08T07:35:00Z",
        apartmentId: "19434e6d-97d1-411a-8330-686c7c6b6510",
    },
    {
        uuid: "6366f15a-6b06-406b-9746-5d250ed86e94",
        doorName: "Unit Entrance",
        buildingName: "67 W Coast Wy",
        connectionType: "Wireless",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T11:23:00Z",
        apartmentId: "1042c239-9cb1-4a15-bf59-78dc5715c445",
    },
    {
        uuid: "4040a517-cc06-4301-9d71-53747591bb3e",
        doorName: "Unit Entrance",
        buildingName: "67 W Coast Wy",
        connectionType: "Wireless",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T13:15:00Z",
        apartmentId: "8c9b836a-7ee2-4e82-b114-2dbb7ad36a6d",
    },
    {
        uuid: "98520753-4a8e-4b21-a34c-cca084dd94b9",
        doorName: "Unit Entrance",
        buildingName: "67 W Coast Wy",
        connectionType: "Wireless",
        connectionStatus: "Online",
        lastUpdate: "2024-08-08T16:53:00Z",
        apartmentId: "00fd12c0-f466-475c-b43e-771d03b8bf8c",
    },
];
exports.apartmentList = [
    {
        uuid: "19434e6d-97d1-411a-8330-686c7c6b6510",
        apartmentName: "Unit 11-21",
    },
    {
        uuid: "1042c239-9cb1-4a15-bf59-78dc5715c445",
        apartmentName: "Unit 11-23",
    },
    {
        uuid: "8c9b836a-7ee2-4e82-b114-2dbb7ad36a6d",
        apartmentName: "Unit 11-25",
    },
    {
        uuid: "00fd12c0-f466-475c-b43e-771d03b8bf8c",
        apartmentName: "Unit 11-28",
    },
    {
        uuid: "054fb30d-c5e5-4643-9c43-b3d858c883f7",
        apartmentName: "Penthouse A",
    },
    {
        uuid: "902f7678-7d23-49f9-84d0-404bbc309c4c",
        apartmentName: "Penthouse B",
    },
];
