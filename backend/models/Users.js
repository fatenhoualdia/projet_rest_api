const mongoose = require("mongoose");
const UserSchema = mongoose.Schema;
const User = new UserSchema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("UserModel", User);