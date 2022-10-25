const Joi = require("joi");

const email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ["com", "net"] },
});

const longStr = Joi.string().max(1000);

const shortStr = Joi.string().max(50);

const pin = Joi.string().min(6).max(6).required();

const newPassword = Joi.string().alphanum().min(3).max(30).required();

const resetPassReqValidation = (req, res, next) => {
  const schema = Joi.object({ email });

  const value = schema.validate(req.body);

  if (value.error) {
    return res.json({ status: "error", message: value.error.message });
  }
  next();
};

const updatePassValidation = (req, res, next) => {
  const schema = Joi.object({ email, pin, newPassword });

  const value = schema.validate(req.body);

  if (value.error) {
    return res.json({ status: "error", message: value.error.message });
  }
  next();
};

const createNewTicketValidation = (req, res, next) => {
  const schema = Joi.object({
    subject: shortStr.required(),
    sender: shortStr.required(),
    message: longStr.required(),
  });

  const value = schema.validate(req.body);

  if (value.error) {
    return res.json({ status: "error", message: value.error.message });
  }
  next();
};

const replyTicketMessageValidation = (req, res, next) => {
  const schema = Joi.object({
    sender: shortStr.required(),
    message: longStr.required(),
  });

  const value = schema.validate(req.body);

  if (value.error) {
    return res.json({ status: "error", message: value.error.message });
  }
  next();
};

module.exports = {
  resetPassReqValidation,
  updatePassValidation,
  createNewTicketValidation,
  replyTicketMessageValidation
};