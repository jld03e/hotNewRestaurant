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
app.post("/api/table", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    if (tableData.length < 5) {
        tableData.push(req.body);
        res.json(true);
    }
    else {
        waitlistData.push(req.body);
        res.json(false);
    }
  });

};