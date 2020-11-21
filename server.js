const express = require("express");

var PORT = process.env.PORT || 3001;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/controller.js");
//const db = require("./models/index.js");

app.use(routes);


//db.sequelize.sync().then(function() {
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
//})