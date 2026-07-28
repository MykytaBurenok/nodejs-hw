import express from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';
import {
  createNoteSchema,
  getAllNotesSchema,
  noteIdSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
import {
  createNote,
  getAllNotes,
  getNoteById,
  updateNote,
  deleteNote,
} from '../controllers/notesController.js';

const router = express.Router();

// Protect all note routes
router.use(authenticate);

router.post('/', celebrate({ body: createNoteSchema }), createNote);
router.get('/', celebrate({ query: getAllNotesSchema }), getAllNotes);
router.get('/:noteId', celebrate({ params: noteIdSchema }), getNoteById);
router.patch(
  '/:noteId',
  celebrate({ params: noteIdSchema, body: updateNoteSchema }),
  updateNote,
);
router.delete('/:noteId', celebrate({ params: noteIdSchema }), deleteNote);

export default router;
