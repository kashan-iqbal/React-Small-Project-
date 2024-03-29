import Jwt from "jsonwebtoken";
import env from "dotenv";
import { User } from "../models/user.modal.js";

env.config();

const jwtVerify = async (req, res, next) => {
  const token = req.cookies?.accessToken;

  try {
    if (!token) {
      return res.send({ message: "not token" });
    }
    const decodedToken = Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken._id).select(
      "-password -reFreshToken"
    );

    req.user = user;
  } catch (error) {
    if (error) {
      console.log(`error in auth middleware`, error);
    }
  }

  next();
};

export default jwtVerify;
