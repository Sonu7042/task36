const mongoose = require("mongoose");

const link = "mongodb+srv://adminUser:sonu12345@sonu.mwbei.mongodb.net/";
const mongoConnect = () => {
  try {
    mongoose.connect(link);
    console.log("db is connected");
  } catch (err) {
    console.log("This is Error", err);
  }
};

const imgSchema = new mongoose.Schema(
  {
    filename: String,
    path: String,
    originalname: String,
  },
  {
    timestamps: true,
  }
);

const imgModel = mongoose.model("img", imgSchema);

module.exports = { mongoConnect, imgModel };
