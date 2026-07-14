import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  getAllNotesSchema,
  noteIdSchema,
  createNoteSchema,
  updateNoteSchema,
} from '../validations/notesValidation.js';
import {
  getNotesController,
  getNoteByIdController,
  createNoteController,
  updateNoteController,
  deleteNoteController,
} from '../controllers/notesController.js';

const router = Router();

router.get('/', celebrate(getAllNotesSchema), getNotesController);
router.get('/:noteId', celebrate(noteIdSchema), getNoteByIdController);
router.post('/', celebrate(createNoteSchema), createNoteController);
router.patch('/:noteId', celebrate(updateNoteSchema), updateNoteController);
router.delete('/:noteId', celebrate(noteIdSchema), deleteNoteController);

export default router;
