const config = require("../config/index");
const mongoose = require("mongoose");

// connection
module.exports = mongoose
  .connect(config.MongoDB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected..."));
