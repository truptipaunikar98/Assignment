const express = require("express");
const router = express.Router();
const employeeController = require("./Controller/employeeController");



router.use("/employee", employeeController);




module.exports = router;