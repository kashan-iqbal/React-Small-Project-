import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://kashan:admin@cluster0.r4deefn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    if (connect) console.log(`mongo db is connected ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
