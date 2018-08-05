var path = require("path");


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
  app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
  });
  
  // Displays all table reservations
  app.get("/table", function(req, res) {
    return res.json(table);
  });