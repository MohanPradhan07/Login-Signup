const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });
  console.log(error)
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  req.body = value;
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(100).required(),
  });

  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  });
  
  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
      success: false,
    });
  }

  req.body = value;
  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};
