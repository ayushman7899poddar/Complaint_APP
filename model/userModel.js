const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
   validator:[validator.isEmail,"Enter correct email"]
  },
  phone: {
    type: String,
    required: [true, "phone no is required"],
    minLength:[10,"Minimum length of phone should be 10"],
    maxLength:[10,"Maximum length of phone should be 10"]
  },
  password: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
    unique:true,
  },
});

module.exports = mongoose.model("user", userSchema);
