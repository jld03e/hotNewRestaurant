var path = require("path");


module.exports = function (app) {

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/table.html"));
  });
  
app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reservation.html"));
  });

app.use( function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/table", function(req, res) {
  return res.json(table);
});

};
