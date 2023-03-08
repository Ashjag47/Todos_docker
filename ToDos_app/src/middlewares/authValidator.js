const {HTTPError} = require('../utils/errors');
const axios = require('axios');
const Joi = require('joi');
const tokenSchema = Joi.object({
  token: Joi.string().required(),
});
const tokenValidation = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log('token7000', token);
    const { error } = tokenSchema.validate();
    if (error) throw new HTTPError(400, error.details[0].message);
    const verifyToken = await axios.post(
      'http://server:3000/api/token/validate',
      { token: token },
      { headers: { token: token } }
    );
    // console.log(verifyToken);
    if (verifyToken) next();
    else {
      throw new HTTPError(401, 'Unauthorized');
    }
  } catch (err) {
    if (err instanceof HTTPError) {
      res.status(err.code).json({ message: err.message });
    } else {
      console.log('Catch of Todo Middleware');
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
};
module.exports = { tokenValidation };