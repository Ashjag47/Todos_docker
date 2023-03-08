const taskServices = require("../services/tasks");
const { HTTPError } = require("../utils/errors.js");

const getAllTasks = async (req, res) => {
    try {
        const listId = req.params.listId;
        const tasks = await taskServices.getAllTasks(listId);
        res.status(200);
        res.send(tasks);
    }
    catch (err) {
        if (err instanceof HTTPError) {
            res.status(err.statusCode).send({ msg: err.message });
        }
        else {
            res.status(500).send({ msg: err.message });
        }

    }
};
const createTask = async (req, res) => {
    try {
        const data = req.body;
        const listId = req.params.listId;
        const taskCreated = await taskServices.createTask(listId, data);
        res.status(201).send(taskCreated);
    }
    catch (err) {
        if (err instanceof HTTPError) {
            res.status(err.statusCode).send({ msg: err.message });
        }
        else {
            res.status(500).send({ msg: err.message });
        }
    }
}
const deleteFinishedTasks = async (req, res) => {
    try {
        await taskServices.deleteFinishedTasks(req.params.listId);
        res.status(204).send({ "msg": "Deleted finished tasks" });
    }
    catch (err) {
        if (err instanceof HTTPError) {
            res.status(err.statusCode).send({ msg: err.message });
        }
        else {
            res.status(500).send({ msg: err.message });
        }

    }

};

const getTaskById = async (req, res) => {
    const id = req.params.taskId;
    try {
        const result = await taskServices.getTaskById(id);
        res.status(200).send(result);

    }
    catch (err) {
        if (err instanceof HTTPError) {
            res.status(err.statusCode).send({ msg: err.message });
        }
        else {
            res.status(500).send({ msg: err.message });
        }

    }
};
const updateTask = async (req, res) => {
    const id = req.params.taskId;
    try {
        const updatedTask = await taskServices.updateTask(id, req.body);
        res.status(200).send(updatedTask);
    }
    catch (err) {
        if (err instanceof HTTPError) {
            res.status(err.statusCode).send({ msg: err.message });
        }
        else {
            res.status(500).send({ msg: "Something went wrong" });
        }
    }
};
module.exports = { getAllTasks, createTask, deleteFinishedTasks, getTaskById, updateTask };