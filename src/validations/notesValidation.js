import Joi from 'joi';

export const createNoteSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().default(''),
  tag: Joi.string().valid('Todo', 'In Progress', 'Done').default('Todo'),
});

export const getNotesQuerySchema = Joi.object({
  page: Joi.number().integer().min(1).default(1),
  perPage: Joi.number().integer().min(1).default(10),
  tag: Joi.string().valid('Todo', 'In Progress', 'Done'),
  search: Joi.string().default(''),
});

export const getNoteByIdParamsSchema = Joi.object({
  noteId: Joi.string().hex().length(24).required(),
});

export const updateNoteParamsSchema = Joi.object({
  noteId: Joi.string().hex().length(24).required(),
});

export const updateNoteBodySchema = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
  tag: Joi.string().valid('Todo', 'In Progress', 'Done'),
});

export const deleteNoteParamsSchema = Joi.object({
  noteId: Joi.string().hex().length(24).required(),
});
