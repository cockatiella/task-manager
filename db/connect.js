const mongoose = require("mongoose");


const connectDB = async (url) => {
  return mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
