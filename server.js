// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//exports information to the server.
require("./routes/data.js")(app);
require("./routes/html.js")(app);


console.log(PORT);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
})