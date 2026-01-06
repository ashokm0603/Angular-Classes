const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: { type: string, require: true },
  email: { type: string, require: true },
  phone: { type: string, require: true },
  password: { type: string, require: true },
});

module.exports = mongoose.Model("User", user);
