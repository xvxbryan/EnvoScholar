const mongoose = require("mongoose");
const passport = require("passport");
const _ = require("lodash");

const User = mongoose.model("User");

/**
 * Gets called from the index.router.js
 * Registers a new user
 */
module.exports.register = (req, res, next) => {
  var user = new User();
  user.fullName = req.body.fullName;
  user.email = req.body.email;
  user.password = req.body.password;
  user.articles = [];
  user.search = [];
  user.click = [];
  user.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      if (err.code == 11000) {
        res.status(422).send(["Duplicate email address found."]);
      } else return next(err);
    }
  });
};

/**
 * Gets called from the index.router.js
 * Authenticates the login information
 */
module.exports.authenticate = (req, res, next) => {
  //call for passport authentication
  passport.authenticate("local", (err, user, info) => {
    //error from passport middleware
    if (err) return res.status(400).json(err);
    else if (user) return res.status(200).json({ token: user.generateJWT() });
    //unknown user or wrong password
    else return res.status(404).json(info);
  })(req, res);
};

/**
 * Gets called from the index.router.js
 * Returns the user profile information
 */
module.exports.userProfile = (req, res, next) => {
  User.findOne({ _id: req._id }, (err, user) => {
    if (!user) {
      return res
        .status(404)
        .json({ status: false, message: "User record not found." });
    } else {
      return res.status(200).json({
        status: true,
        user: _.pick(user, ["fullName", "email", "articles", "search", "click"])
      });
    }
  });
};

/**
 * Gets called from the index.router.js
 * Saves an article to the users profile
 */
module.exports.saveArticle = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req._id },
    {
      $addToSet: { articles: req.body.articles }
    },
    {
      new: true
    },
    function(err, savedArticle) {
      if (err) {
        res.send("Error saving article");
      } else {
        res.json(savedArticle);
      }
    }
  );
};

/**
 * Gets called from the index.router.js
 * Saves a search entry to a users profile
 */
module.exports.saveSearch = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req._id },
    {
      $addToSet: { search: req.body.search }
    },
    {
      new: true
    },
    function(err, savedSearch) {
      if (err) {
        res.send("Error saving search history");
      } else {
        res.json(savedSearch);
      }
    }
  );
};

/**
 * Gets called from the index.router.js
 * Saves a clicked article to the users profile
 */
module.exports.saveClick = (req, res, next) => {
  User.findOneAndUpdate(
    { _id: req._id },
    {
      $addToSet: { click: req.body.click }
    },
    {
      new: true
    },
    function(err, savedClick) {
      if (err) {
        res.send("Error saving search history");
      } else {
        res.json(savedClick);
      }
    }
  );
};
