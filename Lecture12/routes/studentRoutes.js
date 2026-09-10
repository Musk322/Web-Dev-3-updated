const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

//Read operations 
router.get("/", studentController.getStudents);

//read operation with id
router.get("/:rollNo", studentController.getStudentById);
//create 
router.post("/",studentController.addStudent);

//update
router.put("/:rollNo", studentController.updateStudent);

//delete
router.delete("/:rollNo", studentController.deleteStudent);

module.exports = router;