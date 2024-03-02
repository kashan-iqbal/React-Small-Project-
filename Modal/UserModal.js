import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      require: true,
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("user", userSchema);
