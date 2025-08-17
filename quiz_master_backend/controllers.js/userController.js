const User = require("../models/userModel");

exports.getUsers = (req, res, next) => {
  User.getAll((err, rows) => {
    if (err) return next(err);
    res.json(rows);
  });
};

exports.createUser = (req, res, next) => {
  const { name, email } = req.body;
  User.create(name, email, (err, user) => {
    if (err) return next(err);
    res.status(201).json(user);
  });
};
