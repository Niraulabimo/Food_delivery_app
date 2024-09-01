//create apis, using this we can add new food items in our database

import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food added successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Failed to add food" });
  }
};
//all food list
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error while fetching food list" });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    //find the food model using the is
    const food = await foodModel.findById(req.body.id);
    //delete the image from the uploads folder
    fs.unlink(`uploads/${food.image}`, () => {});
    //delete the food item from the database
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food removed successfully" });
  } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Failed to remove food" });
  }
};
export { addFood, listFood, removeFood };
