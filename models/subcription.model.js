import mongoose from "mongoose";

const subcriptionSchema = new mongoose.Schema(
  {
    subcriber: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    channel: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subcription = mongoose.model("subcribtion", subcriptionSchema);
