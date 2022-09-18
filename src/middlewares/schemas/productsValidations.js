const Joi = require('joi');
const mapError = require('../../utils/errorMap');

const nameSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const productValidation = (req, res, next) => {
  const validation = nameSchema.validate(req.body);
  if (validation.error) {
    return res
      .status(mapError(validation.error.details[0].type))
      .json({ message: validation.error.details[0].message });
  }
  next();
};

// fonte: mentoria de Joi com o Danilo / https://joi.dev/api/?v=17.6.0#validationerror

module.exports = {
  productValidation,
};