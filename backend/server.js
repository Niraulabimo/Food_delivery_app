import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app config, we will initialize our app using express package
const app = express();
const port = 4000;

//middleware, when we get the request from frontend to backend that will be parsed using this json
app.use(express.json());

//Using this, we can access the backend from any frontend
app.use(cors());

//Db connection
connectDB();

//API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

//get method is the http method which is used to get/request the data from the server
//we give the path where we want to run the endpoint
app.get("/", (req, res) => {
  res.send("API Working");
});

//To run the express server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
