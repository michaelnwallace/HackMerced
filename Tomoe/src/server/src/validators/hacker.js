import Joi from 'joi';

export const hackerValidators = {
  postHacker: {
    payload: {
      email: Joi.string().required().email(),
      password: Joi.string().min(6).required(),
      confirmPassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'Passwords must match!' } } }),
      name: Joi.string(),
      details: Joi.object(),
      status: Joi.any().valid(TOMOE_CONFIG.hackerStatuses)
    }
  },
  validateHacker: {
    payload: {
      password: Joi.string().required()
    }
  },
  updateHackerStatus: {
    payload: {
      status: Joi.any().valid(TOMOE_CONFIG.hackerStatuses).required()
    }
  },
}
