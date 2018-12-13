const mongoose = require("mongoose");

//Connecting to the database
mongoose.connect(
  process.env.MONGODB_URI,
  err => {
    if (!err) {
      console.log("Mongodb connection succeeded ");
    } else {
      console.log(
        "Error. Mongodb connection failed: " + JSON.stringify(err, undefined, 2)
      );
    }
  }
);

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/EnvoScholar";

MongoClient.connect(
  url,
  function(err, db) {
    if (err) throw err;
    var dbo = db.db("EnvoScholar");
    dbo.createCollection("feedBacks", function(err, res) {
      if (err) throw err;
      db.close();
    });
  }
);

require("./feedBack.model");
require("./user.model");
