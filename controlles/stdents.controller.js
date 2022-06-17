const Student = require("../models/Student.model");

module.exports.studentsController = {
  getStudents: (req, res) => {
    Student.find({}).then((docs) => {
      res.json(docs);
    });
  },

  postStudents: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age, // возраст
    }).then(() => {
      res.json("Студент добавлен");
    });
  },

  deleteStudentsId: (req, res) => {
    try {
      Student.findByIdAndRemove(req.params.id).then((docs) => {
        res.json(`Студент c ID ${req.params.id} удален`);
      });
    } catch (err) {
      console.log(err);
    }
  },

  patchStudentId: (req, res) => {
    Student.findByIdAndUpdate(req.params.id, { name: req.body.name }).then(
      () => {
        res.json("Cltk");
      }
    );
  },
};
