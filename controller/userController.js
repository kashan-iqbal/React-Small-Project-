import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.modal.js";
import { upLoadOnCloudnairy } from "../utils/cloudnairy.js";
import { ApiResponce } from "../utils/Apiresponce.js";
import jwt from "jsonwebtoken";
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
      return res.send({ message: "password is not correct" });
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
  const option = {
    httpOnly: true,
    secure: true,
  };
  return res
    .status(200)
    .clearCookie("accessToken", option)
    .clearCookie("reFreshToken", option)
    .send({ message: "logut successful" });
};

const renewAccessToken = async (req, res) => {
  try {
    const tokenRefresh = req.cookies.reFreshToken;

    const id = await jwt.decode(tokenRefresh, process.env.REFRESH_TOKEN_SECRET);

    const currentUser = await User.findById(id);
    if (!(tokenRefresh === currentUser.reFreshToken)) {
      throw new ApiError(400, `you need to logn again`);
    }
    const { accessToken, reFreshToken } =
      await generateAccessTokenAndRefreshToken(id);
    const option = {
      httpOnly: true,
      secure: true,
    };
    return res
      .status(200)
      .cookie("accessToken", accessToken, option)
      .cookie("reFreshToken", reFreshToken, option)
      .send({ message: "update successfully" });
  } catch (error) {
    console.log(error);
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      return res.send({ message: "all fieds are requird" });
    }

    const user = await User.findById(req.user._id);

    const checkingPassword = await user.isPasswordCorrect(oldPassword);
    if (!checkingPassword) {
      return res.send({ message: "old password is not same" });
    }
    user.password = newPassword;
    await user.save({ validateBeforSave: true });

    return res.send({ message: "Password update successFully" });
  } catch (error) {
    if (error) {
      console.log(error);
      return res.send({ message: "error in change pass" });
    }
  }
};

const getCurrentUser = async (req, res) => {
  try {
    if (req.user) {
      return res.send({ message: "user information", user: req.user });
    }
  } catch (error) {
    return res.send({ message: "error while getting user information" });
  }
};

const updateInfo = async (req, res) => {
  try {
    const { fullName, email } = req.body;
    if (!(fullName || email)) {
      return res.send({
        message: "fields are require to  update user Profile",
      });
    }

    const user = await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          email,
          fullName,
        },
      },
      { new: true }
    ).select("-password");
    return res.send({
      message: "user update successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      message: "error while update user",
    });
  }
};

const updateAvatar = async (req, res) => {
  try {
    const avatar = req.file;
    console.log(req.file);
    if (!avatar) {
      return res.send({
        message: "image is require",
      });
    }

    const filePath = avatar.path;

    const result = await upLoadOnCloudnairy(filePath);

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          avatar: result.url,
        },
      },
      { new: true }
    ).select("-password");
    return res.send({
      message: "Avatar image successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.send({
      message: "error while update avatar image",
    });
  }
};

const updateCoverImage = async (req, res) => {
  try {
    const coverImage = req.file;
    console.log(coverImage)
    if (!coverImage) {
      return res.send({
        message: "coverImage is require",
      });
    }

    const filePath = coverImage.path;

    const result = await upLoadOnCloudnairy(filePath);

    const user = await User.findByIdAndUpdate(
      req.user,
      {
        $set: {
          coverImage: result.url,
        },
      },
      { new: true }
    ).select("-password");
    return res.send({
      message: "coverimage successfully",
      user,
    });
  } catch (error) {
    return res.send({
      message: "error while update  coverImage",
    });
  }
};


const subcribeChannel = async(req,res)=>{
  try {
    
    
  } catch (error) {
    
  }
}


const working = async (req, res) => {
  try {
    res.send({ message: "i am working" });
    console.log(req.user);
  } catch (error) {
    if (error) {
      console.log(error, `iam`);
    }
  }
};
export {
  registerUser,
  LoginUser,
  logout,
  renewAccessToken,
  working,
  changePassword,
  getCurrentUser,
  updateInfo,
  updateAvatar,
  updateCoverImage,
};
