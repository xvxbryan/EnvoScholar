const mongoose = require("mongoose");

var feedBackSchema = new mongoose.Schema({
  question: {
    type: Array
  }
});

mongoose.model("Feedback", feedBackSchema, "feedbacks");
