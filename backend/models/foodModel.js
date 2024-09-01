//Using this, we can store the products in the databse

import mongoose from "mongoose";

//create schema to describe the food model properties
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
export default foodModel;
