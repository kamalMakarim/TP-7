const mongoose = require("mongoose");
require("dotenv").config();
let { DB_USERNAME, DB_PASSWORD, DB_COLLECTION} = process.env;

exports.connectDb = async () => {
  mongoose.connect(
    `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@sbd.ta7xmwq.mongodb.net/${DB_COLLECTION}?retryWrites=true&w=majority&appName=SBD`
  ).catch
  (err => {
    console.log(err);
  });
};
