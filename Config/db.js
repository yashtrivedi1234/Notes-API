import mongoose from "mongoose";

const connectDb = async () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "Notes_API" })
    .then(() => console.log("MongoDb Connected Successfully"))
    .catch((err) => console.error("MongoDb Connection Failed", err));
};

export default connectDb;
