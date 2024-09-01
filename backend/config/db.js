//in this file we can create a logic to connect with the database
import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect(
      "mongodb+srv://bimo:12345@cluster0.dmxdu0y.mongodb.net/food-del"
    ).then(() => {
        console.log("Database connected");
    })
}