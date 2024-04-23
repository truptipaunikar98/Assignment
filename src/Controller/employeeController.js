const express = require("express");
const employeeController = express.Router();
const Employee = require("../Model/employeeSchema");
const employeeServices = require("../Services/employeeServices");
const { body } = require("express-validator");
const { sendResponse } = require("../Utlis/common");

employeeController.post("/register", async (req, res) => {
  try {
    let isEmailExist = await Employee.findOne({ Email: req.body.Email });
    if (isEmailExist) {
      sendResponse(res, 200, "Error", {
        message: "This Email Already Exists!",
      });
      return;
    }
    const userCreated = await employeeServices.create(req.body);
    sendResponse(res, 200, "Success", {
      message: "Employee Registered successfully!",
      userData: userCreated,
    });
  } catch (error) {
    console.log(error);
    sendResponse(res, 500, "Failed", {
      message: error.message || "Internal server error",
    });
  }
});






module.exports = employeeController;
