import mongoose from "mongoose";

const catageorySchema = new mongoose.Schema(
  {
    catageory: {
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const catageory = mongoose.Schema("catageory", catageorySchema);
