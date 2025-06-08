import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Notes = mongoose.model("Notes", noteSchema);

export default Notes;
