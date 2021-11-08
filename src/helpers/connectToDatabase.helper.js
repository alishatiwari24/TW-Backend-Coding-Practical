import mongoose from "mongoose";

export async function connectToDatabase() {
  // TASK-002 Connect to Database.
  await mongoose.connect(process.env.MONGO_URL);
  console.log("MongoDB connected!!!");
}
