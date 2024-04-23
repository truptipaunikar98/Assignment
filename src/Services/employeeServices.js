const mongoose = require("mongoose");
const Employee = require("../Model/employeeSchema");


exports.create = async (body) => {
  return await Employee.create(body);
};







