import express from "express"
const router = express.Router()
import {createNote, deleteNote, getAllNotes, getNoteById, updateNote} from '../Controllers/notesController.js'

router.get("/",getAllNotes)
router.get("/:id",getNoteById)
router.post("/",createNote)
router.put("/:id",updateNote)
router.delete("/:id",deleteNote)

export default router