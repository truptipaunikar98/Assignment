const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

const employeeSchema = mongoose.Schema({
    FirstName: {type: String},
    MiddleName: {type: String},
    LastName: {type: String},
    MobileNumber: {type: Number},
    Email: {type: String},
    BloodGroup: {type: String},
    CurrentAddress: {type: String},
    PermanentAddress: {type: String},
    HighestQualification: {type: String},
    Year: {type: Number},
    TotalExperience: {type: String},
    LastCompanyName: {type: String},
    JoiningDate: {type: Date},
    Relievingdate: {type: String},
    ReferenceName: {type: String},
    Relation: {type: String},
    ContactNumber: {type: Number},
    Address: {type: String},
    EmployeeId: {type: String},
    Designation: {type: String},
    Department: {type: String},
    ReportTo: {type: String},
    ReportingManager: {type: String},
    DateOfJoining: {type: Date},
    BasicSalary: {type: String},
    FixedAllowence: {type: String},
    SpecialAllowence: {type: String},
    VariableAllowence: {type: String},
    Deductions: {type: String}
});

employeeSchema.plugin(timestamps);
module.exports = mongoose.model("Employee", employeeSchema);

