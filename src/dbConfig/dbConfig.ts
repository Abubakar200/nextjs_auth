import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected");
    });
    connection.on("error", (err) => {
      console.log(`MongoDB error: ${err}`);
      process.exit();
    });
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`);
    process.exit();
  }
}
