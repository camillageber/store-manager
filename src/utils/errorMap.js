const errorMap = {
  PRODUCT_NOT_FOUND: 404,
  'any.required': 400, /* fonte: https://joi.dev/api/?v=17.6.0#anyrequired */
  'string.min': 422, /* fonte: https://joi.dev/api/?v=17.6.0#stringmin */
};

const mapError = (type) => errorMap[type] || 500;

// fonte: course - aula da seção 5 - dia 3 (antigo bloco 23.3)

module.exports = mapError;