import Bug from "../models/bug.js";
import mongoose from "mongoose";

export const getBugs = async (req, res) => {
  try {
    const bug = await Bug.find();
    console.log(bug);
    res.status(200).json(bug);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const createBug = async (req, res) => {
  const bug = req.body;
  const newBug = new Bug({
    ...bug,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    newBug.save();
    res.status(201).json(newBug);
  } catch (error) {
    res.status(409).json({ message: error });
  }
};

export const deleteBug = async (req, res) => {};
