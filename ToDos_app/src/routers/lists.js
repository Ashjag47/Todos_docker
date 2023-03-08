const express = require('express');
const listsController = require('../controllers/lists');
const tasksRoutes = require('./tasks');
const router = express.Router();
const listsValidator = require('../middlewares/listsValidator');

router.get('/', listsController.getAllLists);
router.post('/', listsValidator.createListValidator , listsController.createList);
router.get('/:listId', listsValidator.getListByIdValidator, listsController.getListById);
router.put('/:listId', listsValidator.updateListValidator, listsController.updateList);
router.delete('/:listId', listsValidator.deleteListValidator, listsController.deleteList);

router.use('/:listId/tasks', tasksRoutes)

module.exports = router;