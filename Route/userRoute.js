import { Router } from "express";
import {
  LoginUser,
  registerUser,
  logout,
} from "../controller/userController.js";
import { uploads } from "../middlewares/multer.middleware.js";
import jwtVerify from "../middlewares/auth.js";

const router = Router();

router.route("/register").post(
  uploads.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  registerUser
);

router.route("/login").post(LoginUser);
router.route("/logout").post(jwtVerify, logout);
export default router;
