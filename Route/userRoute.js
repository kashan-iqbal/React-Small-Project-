import { Router } from "express";
import {
  LoginUser,
  registerUser,
  logout,
  renewAccessToken,
  working,
  changePassword,
  getCurrentUser,
  updateAvatar,
  updateCoverImage,
  updateInfo,
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
router.route("/reFreshToken").post(renewAccessToken);
router.route("/change-Password").post(jwtVerify, changePassword);
router.route("/userInfo").get(jwtVerify,getCurrentUser);
router.route("/update-user").put(jwtVerify,updateInfo);
router
  .route("/update-avatar")
  .put(uploads.single("avatar"), jwtVerify,updateAvatar);
router
  .route("/update-coverImage")
  .put(uploads.single("coverImage"),jwtVerify, updateCoverImage);
router.route("/iam").post(jwtVerify, working);

export default router;
