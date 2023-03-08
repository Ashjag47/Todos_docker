const Joi = require('joi');

const crateTaskSchema = Joi.object({
		name: Joi.string().min(1).max(30),
        isCompleted: Joi.boolean().required()   
});

const getAllTasksValidator = (req, res, next) => {
	const { error } = Joi.object({
		listId: Joi.number().integer().required()
	}).validate(req.params);
	if (error) return res.status(400).json({ message: error.message });
	next();
};

const createTaskValidator = (req, res, next) => {
	let errorParam = Joi.object({
		listId: Joi.number().integer().required()
	}).validate(req.params);

	if (errorParam.error) return res.status(400).json({ message: errorParam.error.message });

    let { error } = crateTaskSchema.validate(req.body);
	if (error) return res.status(400).json({ message: error.message });
	next();
};

const getTaskByIdValidator = (req, res, next) => {
	const { error } = Joi.object({
		listId: Joi.number().integer().required(),
        taskId: Joi.number().integer().required()
	}).validate(req.params);
	if (error) return res.status(400).json({ message: error.message });
	next();
};

const updateTaskValidator = (req, res, next) => {
	let errorParam = Joi.object({
		listId: Joi.number().integer().required()
	}).validate(req.params.taskId);

	if (errorParam.error) return res.status(400).json({ message: errorParam.error.message });

    let { error } = crateTaskSchema.validate(req.body);
	if (error) return res.status(400).json({ message: error.message });
	next();
};

const deleteFinishedTasksValidator = (req, res, next) => {
	const { error } = Joi.object({
		taskId: Joi.number().integer().required()
	}).validate(req.params.taskId);
	if (error) return res.status(400).json({ message: error.message });
	next();
};


module.exports = { getAllTasksValidator, createTaskValidator, getTaskByIdValidator, updateTaskValidator, deleteFinishedTasksValidator};
