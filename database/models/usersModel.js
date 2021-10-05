const mongoose = require("mongoose");
const client = require("../database");
mongoose.Promise = global.Promise;

const usersSchema = mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
