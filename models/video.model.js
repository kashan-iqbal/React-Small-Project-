import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile: {
      require: true,
      type: String,
    },

    thumnail: {
      require: true,
      type: String,
    },

    owner: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
    thumnail: {
      require: true,
      type: String,
      trim: true,
    },
    tittle: {
      require: true,
      type: String,
    },
    description: {
      require: true,
      type: String,
    },
    duration: {
      type: Number,
      require: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);


videoSchema.plugin(mongooseAggregatePaginate)



export const Video = mongoose.model("Video",videoSchema)


