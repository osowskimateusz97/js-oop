export var GuiTriggerTypes;
(function (GuiTriggerTypes) {
    GuiTriggerTypes["shipOrder"] = "shipOrder";
})(GuiTriggerTypes || (GuiTriggerTypes = {}));
export var LetterShipperType;
(function (LetterShipperType) {
    LetterShipperType[LetterShipperType["AirEast"] = 0.39] = "AirEast";
    LetterShipperType[LetterShipperType["ChicagoSprint"] = 0.42] = "ChicagoSprint";
    LetterShipperType[LetterShipperType["PacificParcel"] = 0.51] = "PacificParcel";
})(LetterShipperType || (LetterShipperType = {}));
export var PackageShipperType;
(function (PackageShipperType) {
    PackageShipperType[PackageShipperType["AirEast"] = 0.25] = "AirEast";
    PackageShipperType[PackageShipperType["ChicagoSprint"] = 0.2] = "ChicagoSprint";
    PackageShipperType[PackageShipperType["PacificParcel"] = 0.19] = "PacificParcel";
})(PackageShipperType || (PackageShipperType = {}));
export var OversizeShipperType;
(function (OversizeShipperType) {
    OversizeShipperType[OversizeShipperType["AirEast"] = 10] = "AirEast";
    OversizeShipperType[OversizeShipperType["PacificParcel"] = 0.02] = "PacificParcel";
    OversizeShipperType[OversizeShipperType["ChicagoSprint"] = 0.2] = "ChicagoSprint";
})(OversizeShipperType || (OversizeShipperType = {}));
export var PackageWeight;
(function (PackageWeight) {
    PackageWeight[PackageWeight["Letter"] = 15] = "Letter";
    PackageWeight[PackageWeight["Package"] = 160] = "Package";
})(PackageWeight || (PackageWeight = {}));
export var ShipperLocation;
(function (ShipperLocation) {
    ShipperLocation["Chicago"] = "Chicago";
    ShipperLocation["Pacific"] = "Pacific";
    ShipperLocation["AirEast"] = "AirEast";
})(ShipperLocation || (ShipperLocation = {}));
export var Marks;
(function (Marks) {
    Marks["Fragile"] = "fragile";
    Marks["NotLeave"] = "notLeave";
    Marks["ReceiptRequested"] = "receiptRequested";
    Marks["NoMarks"] = "There is no marks.";
})(Marks || (Marks = {}));
