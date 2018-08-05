var bodyParser = require("body-parser");
var tableInfo = require("./table.js");
var waitInfo = require("./waitList.js");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Displays reservation, or returns false


app.get("/api/table", function(req, res) {
    res.json(tableInfo);
    });
    
app.get("/api/waitList", function(req, res) {
        res.json(waitInfo);
        });

// Create New reservations - takes in JSON input
app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newreservation = req.body;
  
    console.log(newreservation);
  
    table.push(newreservation);
  
    res.json(newreservation);
  });