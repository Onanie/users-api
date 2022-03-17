const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var db = require('./models');
var User = db.User;
// parse requests of content-type: application/json
//app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the users api." });
});
app.get("/users",function(req,res){
    User.findAll()
        .then(function(users){
        res.json(users);
    })
})
//require("./routes/routes.js")(app);
// set port, listen for requests
app.listen(3000, function() {
    db.sequelize.sync();
  console.log("Server is running on port 3000.");
});