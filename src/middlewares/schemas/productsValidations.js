const Joi = require('joi');

const productValidation = (req, res, next) => {
  const { name } = req.body;
  const { error } = Joi.object({
    name: Joi.string().min(5).required()
      .messages({
        'string.base': '"name" must be a string',
        'string.min': '"name" length must be at least 5 characters long',
        'any.required': '"name" is required',
      }),
  }).validate({ name });
  
  if (error) {
    if (error.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    }
  
      return res.status(422).json({ message: error.message });
  }

  next();
};

// fontes: 
// mentoria de Joi com o Danilo 
// https://joi.dev/api/?v=17.6.0#validationerror
// https://joi.dev/api/?v=17.6.0#anyrequired 
// https://joi.dev/api/?v=17.6.0#stringmin 

module.exports = {
  productValidation,
};