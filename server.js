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
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


console.log(PORT);
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
})

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "view.html"));
//   });
  
//   app.get("/reservation", function(req, res) {
//     res.sendFile(path.join(__dirname, "reservation.html"));
//   });
  
//   // Displays all characters
//   app.get("/tables", function(req, res) {
//     return res.json(tables);
//   });
//for html file:




// Displays reservation, or returns false


app.get("/api/table/:table", function(req, res) {
res.json(table);
});

app.get("/api/wait/:waitList", function(req, res) {
    res.json(waitList);
    });
    


// Create New reservations - takes in JSON input
app.post("/api/reservation", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newreservation = req.body;

    //regex space remover for the character name:
    // newreservation.routeName = newreservation.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreservation);
  
    table.push(newreservation);
  
    res.json(newreservation);
  });