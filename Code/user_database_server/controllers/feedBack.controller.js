const mongoose = require("mongoose");

const Feedback = mongoose.model("Feedback");

module.exports.question = (req, res, next) => {
  var MongoClient = require("mongodb").MongoClient;
  var url = "mongodb://localhost:27017/EnvoScholar";

  MongoClient.connect(
    url,
    function(err, db) {
      if (err) throw err;
      var dbo = db.db("EnvoScholar");
      var myobj = req.body.question;
      dbo.collection("feedBacks").insertOne(myobj, function(err, res) {
        if (err) throw err;
        db.close();
      });
    }
  );
};
