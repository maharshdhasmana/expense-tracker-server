const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("dbconnected");
  } catch (error) {
    console.log(`error${error}`);
  }
};
module.exports = dbConnect;
