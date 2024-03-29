import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "dgqikciae",
  api_key: "829914223918643",
  api_secret: "wKJGxJ96eQe8gMdv7z-Fb8xklLk",
});

const upLoadOnCloudnairy = async (uploadFilePath) => {
  try {
    if (uploadFilePath) {
      const responce = await cloudinary.uploader.upload(uploadFilePath, {
        resource_type: "auto",
      });
      return responce;
    }
  } catch (error) {
    console.log(error)
    fs.unlinkSync(uploadFilePath);
    return null;
  }
};

export { upLoadOnCloudnairy };
