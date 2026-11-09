import "dotenv/config";
import mongoose from "mongoose";

export default async function ConnectToDataBace() {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect(`${process.env.MONGO_DB_URL}`)
        .then(() => console.log("connected to data bace successfuly 🔐"))
    }
  } catch (error) {
    throw error;
  }
}
