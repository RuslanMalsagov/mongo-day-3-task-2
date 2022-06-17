const { Router } = require("express");

const { studentsController } = require("../controlles/stdents.controller.js");

const router = Router();

router.get("/students", studentsController.getStudents);
router.post("/students", studentsController.postStudents);
router.delete("/students/:id", studentsController.deleteStudentsId);
router.patch("/students/:id", studentsController.patchStudentId);

module.exports = router;
