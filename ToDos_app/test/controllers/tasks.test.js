const taskServices = require("../../src/services/tasks");
const taskController = require("../../src/controllers/tasks");
const { HTTPError } = require("../../src/utils/errors.js");

describe("Task Controller", () => {
    describe("getAllTasks", () => {
        it("should return all tasks", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const tasks = [
                {
                    "id": 1,
                    "name": "Task 1",
                    "createdAt": "2020-10-15T16:30:00.000Z",
                    "updatedAt": "2020-10-15T16:30:00.000Z",
                    "finishedAt": null,
                    "listId": 1
                },
                {
                    "id": 2,
                    "name": "Task 2",
                    "createdAt": "2020-10-15T16:30:00.000Z",
                    "updatedAt": "2020-10-15T16:30:00.000Z",
                    "finishedAt": null,
                    "listId": 1
                }
            ];
            jest.spyOn(taskServices, 'getAllTasks').mockResolvedValue(tasks);
            await taskController.getAllTasks(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith(tasks);
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(taskServices, 'getAllTasks').mockRejectedValue(new HTTPError(400, 'Error'));
            await taskController.getAllTasks(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({ msg: 'Error' });
        });
        it("should return 500 if an error occurs", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const error = new Error("Error");
            taskServices.getAllTasks = jest.fn().mockRejectedValue(error);
            await taskController.getAllTasks(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({ msg: error.message });
        });
    });
    describe("createTask", () => {
        it("should create a task", async () => {
            const req = {
                params: {
                    listId: 1
                },
                body: {
                    name: "Task 1"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const task = {
                "id":   1,
                "name": "Task 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "finishedAt": null,
                "listId": 1
            };
            jest.spyOn(taskServices, 'createTask').mockResolvedValue(task);
            await taskController.createTask(req, res, next);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.send).toHaveBeenCalledWith(task);
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(taskServices, 'createTask').mockRejectedValue(new HTTPError(400, 'Error'));
            await taskController.createTask(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({ msg: 'Error' });
        });
        it("should return 500 if an error occurs", async () => {
            const req = {
                params: {
                    listId: 1
                },
                body: {
                    name: "Task 1"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const error = new Error("Error");
            taskServices.createTask = jest.fn().mockRejectedValue(error);
            await taskController.createTask(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({ msg: error.message });
        } );  
    });
    describe("getTaskById", () => {
        it("should return a task", async () => {
            const req = {
                params: {
                    taskId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const task = {
                "id":   1,
                "name": "Task 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "finishedAt": null,
                "listId": 1
            };
            jest.spyOn(taskServices, 'getTaskById').mockResolvedValue(task);
            await taskController.getTaskById(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith(task);
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(taskServices, 'getTaskById').mockRejectedValue(new HTTPError(400, 'Error'));
            await taskController.getTaskById(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({ msg: 'Error' });
        });
        it("should return 500 if an error occurs", async () => {
            const req = {
                params: {
                    taskId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const error = new Error("Error");
            taskServices.getTaskById = jest.fn().mockRejectedValue(error);
            await taskController.getTaskById(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({ msg: error.message });
        });
    }
    );
    describe("updateTask", () => {
        it("should update a task", async () => {
            const req = {
                params: {
                    taskId: 1
                },
                body: {
                    name: "Task 1"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const task = {
                "id":   1,
                "name": "Task 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "finishedAt": null,
                "listId": 1
            };
            jest.spyOn(taskServices, 'updateTask').mockResolvedValue(task);
            await taskController.updateTask(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith(task);
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(taskServices, 'updateTask').mockRejectedValue(new HTTPError(400, 'Error'));
            await taskController.updateTask(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({ msg: 'Error' });
        });
        it("should return 500 if an error occurs", async () => {
            const req = {
                params: {
                    taskId: 1
                },
                body: {
                    name: "Task 1"
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const error = new Error("Error");
            taskServices.updateTask = jest.fn().mockRejectedValue(error);
            await taskController.updateTask(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({msg: "Something went wrong"});
        });
    }
    );
    describe("deleteFinishedTasks", () => {
        it("should delete finished tasks", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            jest.spyOn(taskServices, 'deleteFinishedTasks').mockResolvedValue();
            await taskController.deleteFinishedTasks(req, res, next);
            expect(res.status).toHaveBeenCalledWith(204);
            expect(res.send).toHaveBeenCalledWith({msg: "Deleted finished tasks"});
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(taskServices, 'deleteFinishedTasks').mockRejectedValue(new HTTPError(400, 'Error'));
            await taskController.deleteFinishedTasks(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.send).toHaveBeenCalledWith({ msg: 'Error' });
        });
        it("should return 500 if an error occurs", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const error = new Error("Error");
            taskServices.deleteFinishedTasks = jest.fn().mockRejectedValue(error);
            await taskController.deleteFinishedTasks(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.send).toHaveBeenCalledWith({msg: error.message });
        });
    }
    );
});