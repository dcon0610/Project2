const express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var hbs = require("express-handlebars");
//exphbs.create({helpers: {coffee_card}});

app.engine( 'hbs', hbs( { 
  extname: 'hbs', 
  defaultLayout: 'main', 
  layoutsDir: __dirname + './views/layouts',
  partialsDir: __dirname + './views/partials/coffee/'
} ) );







app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");
const db = require("./models/index.js");

app.use(routes);


db.sequelize.sync().then(function() {
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
})