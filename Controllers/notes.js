import express from "express";
import Notes from "../Models/Notes.js";

// Create a Note
export const createNote = async (req, res) => {
  try {
    const note = await Notes.create(req.body);
    res.json({ message: "File created Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Read all Notes
export const readNote = async (req, res) => {
  try {
    const notes = await Notes.find();
    if (notes.length === 0) {
      return res.json({ message: "No notes found" });
    }
    res.json({ message: "Files Read successfully", notes });
  } catch (err) {
    res.json({ error: err.message });
  }
};

// Read by id
export const readById = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) return res.json({ message: "File Not Found" });
    res.json({ message: "File Fetched Successfully", note });
  } catch (err) {
    res.json({ error: err.message });
  }
};

// Update by id
export const updateById = async (req, res) => {
  try {
    const note = await Notes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!note) return res.json({ message: "File Not Found" });
    res.json({ message: "File Updated Succesfully", note });
  } catch (err) {
    res.json({ error: err.message });
  }
};

// Delete by Id
export const deleteById = async (req, res) => {
  try {
    const note = await Notes.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    if (!note) return res.json({ message: "File Not Found" });
    res.json({ message: "File Deleted Successfully", note });
  } catch (err) {
    res.json({ error: err.message });
  }
};
