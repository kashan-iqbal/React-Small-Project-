import Jwt from "jsonwebtoken";
import env from "dotenv";
import { User } from "../models/user.modal.js";
import { ApiError } from "../utils/ApiError.js";

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
    next();
  } catch (error) {
    res.send(error.message)
  }
};

export default jwtVerify;
