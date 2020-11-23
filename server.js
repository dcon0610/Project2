
var express= require("express");
var path = require("path")
var db = require("./models");


var PORT = process.env.PORT || 3000;
var app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(path.join(__dirname, "public")));


// set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/controller.js");

app.use(routes);


db.sequelize.sync().then(function(){
    app.listen(PORT, function(){
        console.log("listening on port %s", PORT);
    });
});

