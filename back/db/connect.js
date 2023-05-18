const mongoose =require ("mongoose");

const connect = async (url) => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    return console.log(`Connection Established!😁`);
  } catch (error) {
    return console.log(`Connection Error ${error}`);
  }
};

 module.exports = connect;
