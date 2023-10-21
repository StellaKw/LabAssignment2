let config = require("./config");

//database
const mongoose = require("mongoose");

module.exports = function () {
  mongoose.set('strictQuery', true);
  mongoose.connect(config.ATLASDB);
  let mongodb = mongoose.connection;

  mongodb.on("error", console.error.bind(console, "Connection Error: "));
  mongodb.once("open", () => {
    console.log("DATABASE SUCCESFULLY CONNECTED!");
  });


  return mongodb;
};
