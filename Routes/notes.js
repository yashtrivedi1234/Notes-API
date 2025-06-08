import express from "express";
import {
  createNote,
  deleteById,
  readById,
  readNote,
  updateById,
} from "../Controllers/notes.js";

const router = express.Router();

router.post("/create", createNote);
router.get("/read", readNote);
router.get("/:id", readById);
router.put("/:id", updateById);
router.delete("/:id", deleteById);

export default router;
