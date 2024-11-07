import Joi from 'joi';


export const taskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().allow(''),
  status: Joi.string().valid('completed', 'incomplete').default('incomplete'),
});

export const params = Joi.object({
    id: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required()
})