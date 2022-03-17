const User = require("../models/user.js");
const db = require("../models");
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a School
    const school = new School({
      name: req.body.name,
      address: req.body.address,
      latitude: req.body.latitude,
      latitude: req.body.latitude,
      image_link: req.body.image_link,

    });
  
    // Save school in the database
    School.create(school, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the School."
        });
      else res.send(data);
    });
  };

  
  exports.findAll = (req, res) => {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      else res.send(data);
    });
  };

  
  exports.findOne = (req, res) => {
    School.findById(req.params.schoolId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found School with id ${req.params.schoolId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving School with id " + req.params.schoolId
          });
        }
      } else res.send(data);
    });
  };


