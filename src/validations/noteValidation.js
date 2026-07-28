import Joi from 'joi';

export const createNoteSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().default(''),
  tag: Joi.string().valid('Todo', 'In Progress', 'Done').default('Todo'),
});

export const updateNoteSchema = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
  tag: Joi.string().valid('Todo', 'In Progress', 'Done'),
});
