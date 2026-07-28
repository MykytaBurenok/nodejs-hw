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

router.use(authenticate);

router.post('/notes', celebrate({ body: createNoteSchema }), createNote);
router.get('/notes', celebrate({ query: getAllNotesSchema }), getAllNotes);
router.get('/notes/:noteId', celebrate({ params: noteIdSchema }), getNoteById);
router.patch(
  '/notes/:noteId',
  celebrate({ params: noteIdSchema, body: updateNoteSchema }),
  updateNote,
);
router.delete(
  '/notes/:noteId',
  celebrate({ params: noteIdSchema }),
  deleteNote,
);

export default router;
