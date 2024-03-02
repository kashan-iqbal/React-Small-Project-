import mongoose from "mongoose";
import "./../"

const productsSchema = new mongoose.Schema(
  {
    name: {
      require: true,
      type: String,
    },
    description: {
      require: true,
      type: String,
    },
    productImage: {
      require: true,
      type: String,
    },
    price: {
      require: true,
      type: String,
    },
    catageory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "catageory",
      require:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
  },
  { timestamps: true }
);

export const products = mongoose.Schema("products", productsSchema);
