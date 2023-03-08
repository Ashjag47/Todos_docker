const express = require("express");
const router = express.Router({mergeParams: true});
const taskController = require("../controllers/tasks");
//const {listValidator} = require("../middleware/auth.validator");
const taskValidator = require('../middlewares/taskValidator');


router.route("/")
    .get(taskValidator.getAllTasksValidator, taskController.getAllTasks)
    .post(taskValidator.createTaskValidator, taskController.createTask)
    .delete(taskValidator.deleteFinishedTasksValidator, taskController.deleteFinishedTasks);
router.route("/:taskId")
    .get(taskValidator.getTaskByIdValidator, taskController.getTaskById)
    .put(taskValidator.updateTaskValidator, taskController.updateTask);

module.exports = router;