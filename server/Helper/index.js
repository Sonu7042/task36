const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("@fluidjs/multer-cloudinary");

cloudinary.config({
  cloud_name: "dwsdik5f9",
  api_key: "527547676913657",
  api_secret: "bdYn7BrBqWzLJ_F4Ar--vPGo1M4",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
});

module.exports = storage;
