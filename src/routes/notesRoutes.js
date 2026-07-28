import express from 'express';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';
import {
  createNoteSchema,
  getNotesQuerySchema,
  getNoteByIdParamsSchema,
  updateNoteParamsSchema,
  updateNoteBodySchema,
  deleteNoteParamsSchema,
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
router.get('/', celebrate({ query: getNotesQuerySchema }), getAllNotes);
router.get(
  '/:noteId',
  celebrate({ params: getNoteByIdParamsSchema }),
  getNoteById,
);
router.patch(
  '/:noteId',
  celebrate({ params: updateNoteParamsSchema, body: updateNoteBodySchema }),
  updateNote,
);
router.delete(
  '/:noteId',
  celebrate({ params: deleteNoteParamsSchema }),
  deleteNote,
);

export default router;
