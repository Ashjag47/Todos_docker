const Joi = require('joi');

const crateListSchema = Joi.object({
		name: Joi.string().min(1).max(30)
});

const createListValidator = (req, res, next) => {
	const { error } = crateListSchema.validate(req.body);
	if (error) return res.status(400).json({ message: error.message });
	next();
};

const getListByIdValidator = (req, res, next) => {
	const { error } = Joi.object({
		listId: Joi.number().integer().required()
	}).validate(req.params);
	if (error) return res.status(400).json({ message: error.message });
	next();
};

const updateListValidator = (req, res, next) => {
	let errorParam = Joi.object({
		listId: Joi.number().integer().required()
	}).validate(req.params);

	if (errorParam.error) return res.status(400).json({ message: errorParam.error.message });

    let { error } = crateListSchema.validate(req.body);
	if (error) return res.status(400).json({ message: error.message });
	next();
};

const deleteListValidator = (req, res, next) => {
	const { error } = Joi.object({
		listId: Joi.number().integer().required()
	}).validate(req.params);
	if (error) return res.status(400).json({ message: error.message });
	next();
};


module.exports = { createListValidator, getListByIdValidator, updateListValidator, deleteListValidator};
