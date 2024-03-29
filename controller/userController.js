import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.modal.js";
import { upLoadOnCloudnairy } from "../utils/cloudnairy.js";
import { ApiResponce } from "../utils/Apiresponce.js";
import bcrypt from "bcryptjs";

const generateAccessTokenAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    const accessToken = user.accessToken();
    const reFreshToken = user.generateRefreshToken();
    user.reFreshToken = reFreshToken;
    await user.save({ validateBeforSave: false });

    return { accessToken, reFreshToken };
  } catch (error) {
    if (error) {
      throw new ApiError(
        400,
        "Some went wrong in generarting Access & Refresh Token"
      );
    }
  }
};

const registerUser = async (req, res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exists: username, email
  // check for images, check for avatar
  // upload them to cloudinary, avatar
  // create user object - create entry in db
  // remove password and refresh token field from response
  // check for user creation
  // return res

  try {
    const { userName, email, fullName, password } = req.body;

    if (!userName || !email || !fullName || !password) {
      throw new ApiError(400, "All Fileds Are Required !!!");
    }
    const checkingUser = await User.findOne({
      $or: [{ email }, { userName }],
    });

    if (checkingUser) {
      throw new ApiError(
        400,
        "User with this email or username already exist "
      );
    }

    let avatarLocalPath;
    if (req.files.avatar) {
      avatarLocalPath = req.files?.avatar[0]?.path;
    }
    let converImageLocalPath;
    if (req.files.coverImage) {
      converImageLocalPath = req.files?.coverImage[0]?.path;
    }

    if (!avatarLocalPath) {
      throw new ApiError(400, `avatar is required`);
    }

    const avatar = await upLoadOnCloudnairy(avatarLocalPath);
    let converImage;
    if (converImageLocalPath) {
      converImage = await upLoadOnCloudnairy(converImageLocalPath);
    }
    const user = await User.create({
      userName,
      email,
      fullName,
      avatar: avatar.url,
      coverImage: converImage?.url || "",
      password,
    });

    const createdUser = await User.findById(user._id).select(" -reFreshToken");

    if (createdUser) {
      res.send(createdUser);
    }
  } catch (error) {
    console.log(error);
  }
};

const LoginUser = async (req, res) => {
  // req body -> data
  // username or email
  //find the user
  //password check
  //access and referesh token
  //send cookie
  try {
    const { email, userName, password } = req.body;
    if (!(email || userName)) {
      throw new ApiError(400, "email or email is required");
    }
    const user = await User.findOne({
      $or: [{ email }, { userName }],
    });
    if (!user) {
      throw new ApiError(400, "User with email or userName  is not register");
      // return res.send({message:"user not exist"})
    }

    const checkPassword = await user.isPasswordCorrect(password);

    if (!checkPassword) {
      throw new ApiError(400, "Invalid credential");
    }
    const { accessToken, reFreshToken } =
      await generateAccessTokenAndRefreshToken(user._id);
    const loginUser = await User.findById(user._id).select(
      "-password -reFreshToken"
    );

    const option = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("reFreshToken", reFreshToken, option)
      .json(
        new ApiResponce(
          200,
          {
            user: loginUser,
            accessToken,
            reFreshToken,
          },
          "user Login SuccessFul"
        )
      );
  } catch (error) {}
};

const logout = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: { reFreshToken: 1 },
    },

    {
      new: true,
    }
  );
 const option ={
  httpOnly:true,
   secure:true
 }
 return res
 .status(200)
 .clearCookie("accessToken",option)
 .clearCookie("reFreshToken",option)
.send({message:"logut successful"})
 

};
export { registerUser, LoginUser, logout };
