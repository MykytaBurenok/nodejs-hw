import express from 'express';
import { authenticate } from '../middleware/authenticate.js';
import { celebrate } from 'celebrate';
import {
  createNoteSchema,
  updateNoteSchema,
} from '../validations/noteValidation.js';
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const router = express.Router();

router.use(authenticate);

router.post('/', celebrate({ body: createNoteSchema }), createNote);
router.get('/', getAllNotes);
router.get('/:noteId', getNoteById);
router.put('/:noteId', celebrate({ body: updateNoteSchema }), updateNote);
router.delete('/:noteId', deleteNote);

export default router;
