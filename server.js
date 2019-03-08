// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var inspect = require("inspect");
var totalDifference = 0;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// (DATA)
// =============================================================
var friendsList = [
  {
    name: "Diane",
    link: "www.google.com",
    qArray: [1, 2, 3, 4, 5, 6]
  }
];

// Routes
// =============================================================
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friendsList", function(req, res) {
  return res.json(friendsList);
});

app.get("/api/reservations", function(req, res) {
  return res.json(waitList);
});

app.get("/api/friendsList/:name", function(req, res) {
  var friend1 = req.body;
});

app.post("/api/friendsList", function(req, res) {
  var newFriend = req.body;

  var newFriendQArray = newFriend.qArray;

  friendsList.push(newFriend);
  res.send(totalDifference.toString());
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
