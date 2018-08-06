var tableData = require("../data/table.js");
var waitlistData = require("../data/waitlist.js");

// Displays reservation, or returns false

module.exports=function(app) {

app.get("/api/table", function(req, res) {

    res.json(tableData);
    });

app.get("/api/waitlist", function(req, res) {

        res.json(waitlistData);
        });


// Create New reservations - takes in JSON input
app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newReservation = req.body;
  
    console.log(newReservation);
  
    table.push(newReservation);
  
    res.json(newReservation);
  });

    };