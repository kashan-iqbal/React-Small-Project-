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
    fs.unlinkSync(uploadFilePath);
    return null;
  }
};
const deleteOldResource = async (url) => {
  try {
    console.log(url);
    cloudinary.api.resource(url, function (error, result) {
      if (error) {
        console.log(error, `iam error`);
      } else {
        console.log(result)
          cloudinary.uploader.destroy(result?.public_id, function (error, result) {
            if (error) {
              console.log(error);
            } else {
              console.log(result, ` iam delete succes fully`);
            }
          });
        
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export { upLoadOnCloudnairy, deleteOldResource };
