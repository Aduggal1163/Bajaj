import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    lowercase: true,
  },
  dob: {
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
  roll_number: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("User", userSchema);