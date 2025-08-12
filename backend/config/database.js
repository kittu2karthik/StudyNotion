const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB connected succesfully"))
    .catch((err) => {
      console.log("DB connected failed");
      process.exit(1);
    });
};
