const mongoose = require("mongoose");

require("dotenv").config({ path: "./config/.env" });
function connectDb() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
  mongoose
    .connect(process.env.MONGO_URI, options)
    .then(() => console.log("the database is connecting..."))
    .catch((err) => console.log("connection error", err));
}
module.exports = connectDb;