const adminController = require("../Controllers/adminController");
const express = require("express");
const router = express.Router();

router.get("/AdmindashboardCount", adminController.dashboardCount);

module.exports = router;
