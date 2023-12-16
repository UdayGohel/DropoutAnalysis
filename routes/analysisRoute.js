const analysisController = require("../controllers/analysisController");
const express = require("express");
const router = express.Router();

router.get(
  "/FilterStudentinGroup/:id",
  analysisController.FilterStudentinGroup
);
router.get("/yearWiseData", analysisController.yearWiseData);
router.get(
  "/FilterStudentinGroupByTwo",
  analysisController.FilterStudentinGroupByTwo
);
router.get("/statewiseDropout", analysisController.statewiseDropout);
router.get("/mediumWise", analysisController.mediumWise);
router.get("/areaWise", analysisController.areaWise);
router.get("/stateWiseCount", analysisController.stateWiseCount);
router.get("/countryComparative", analysisController.countryComparative);
router.get("/top5", analysisController.top5);

module.exports = router;
