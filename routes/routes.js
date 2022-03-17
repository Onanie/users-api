module.exports = app => {
    const users = require("../controllers/userController.js");
  
    // Retrieve all School
    app.get("/users", users.findAll);
  
    // Retrieve a single Customer with customerId
   app.get("/users/:Id", users.findOne);
  
  };