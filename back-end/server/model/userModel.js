const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Userdb = mongoose.model("Users", schema);

module.exports = Userdb;
