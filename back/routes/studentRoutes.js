const express =require ("express");
const router = express.Router();
const studentctr = require("../controllers/studentCtr.js");





router.put("/:id",studentctr.studentUpdate);
router.delete("/:id",studentctr.studentDelete);
router.get("/:id", studentctr.getStudentById)
router.get("/",studentctr.getAllStudents);


module.exports= router;
