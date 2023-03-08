const listsService = require('../../src/services/lists');
const { HTTPError } = require('../../src/utils/errors.js');
const listsController = require('../../src/controllers/lists');

describe('Lists Controller', () => {
    describe('getAllLists', () => {
        it('should return all lists', async () => {
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const lists = [
                {
                    "id": 1,
                    "name": "List 1",
                    "createdAt": "2020-10-15T16:30:00.000Z",
                    "updatedAt": "2020-10-15T16:30:00.000Z",
                    "userId": 1
                },
                {
                    "id": 2,
                    "name": "List 2",
                    "createdAt": "2020-10-15T16:30:00.000Z",
                    "updatedAt": "2020-10-15T16:30:00.000Z",
                    "userId": 1
                }
            ];
            jest.spyOn(listsService, 'getAllLists').mockResolvedValue(lists);
            await listsController.getAllLists(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith(lists);
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(listsService, 'getAllLists').mockRejectedValue(new HTTPError(400, 'Error'));
            await listsController.getAllLists(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
        });
        it('should return 500 if an error occurs', async () => {
            const req = {};
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const error = new Error('Error');
            listsService.getAllLists = jest.fn().mockRejectedValue(error);
            await listsController.getAllLists(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
        });
    });
    describe('createList', () => {
        it('should create a list', async () => {
            const req = {
                body: {
                    name: 'List 1'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const list = {
                "id": 1,
                "name": "List 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "userId": 1
            };
            jest.spyOn(listsService, 'createList').mockResolvedValue(list);
            await listsController.createList(req, res, next);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.send).toHaveBeenCalledWith(list);
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(listsService, 'createList').mockRejectedValue(new HTTPError(400, 'Error'));
            await listsController.createList(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
        });
        it('should return 500 if an error occurs', async () => {
            const req = {
                body: {
                    name: 'List 1'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const error = new Error('Error');
            listsService.createList = jest.fn().mockRejectedValue(error);
            await listsController.createList(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
        });
    }   );
    describe('getListById', () => {
        it('should return a list', async () => {
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
            const list = {
                "id": 1,
                "name": "List 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "userId": 1
            };
            jest.spyOn(listsService, 'getListById').mockResolvedValue(list);
            await listsController.getListById(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith(list);
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(listsService, 'getListById').mockRejectedValue(new HTTPError(400, 'Error'));
            await listsController.getListById(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
        });
        it('should return 500 if an error occurs', async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const error = new Error('Error');
            listsService.getListById = jest.fn().mockRejectedValue(error);
            await listsController.getListById(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
        });
    }   );
    describe('updateList', () => {
        it('should update a list', async () => {
            const req = {
                params: {
                    listId: 1
                },
                body: {
                    name: 'List 1'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                send: jest.fn()
            };
            const next = jest.fn();
            const list = {
                "id": 1,
                "name": "List 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "userId": 1
            };
            jest.spyOn(listsService, 'updateList').mockResolvedValue(list);
            await listsController.updateList(req, res, next);
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.send).toHaveBeenCalledWith(list);
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(listsService, 'updateList').mockRejectedValue(new HTTPError(400, 'Error'));
            await listsController.updateList(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
        });
        it('should return 500 if an error occurs', async () => {
            const req = {
                params: {
                    listId: 1
                },
                body: {
                    name: 'List 1'
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const error = new Error('Error');
            listsService.updateList = jest.fn().mockRejectedValue(error);
            await listsController.updateList(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
        });
    }
    );
    describe('deleteList', () => {
        it('should delete a list', async () => {
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
            const list = {
                "id": 1,
                "name": "List 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "userId": 1
            };
            jest.spyOn(listsService, 'deleteList').mockResolvedValue(list);
            await listsController.deleteList(req, res, next);
            expect(res.status).toHaveBeenCalledWith(204);
            expect(res.send).toHaveBeenCalledWith();
        });
        it("should return 400 if http error", async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const tasks = [];
            jest.spyOn(listsService, 'deleteList').mockRejectedValue(new HTTPError(400, 'Error'));
            await listsController.deleteList(req, res, next);
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Error' });
        });
        it('should return 500 if an error occurs', async () => {
            const req = {
                params: {
                    listId: 1
                }
            };
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };
            const next = jest.fn();
            const error = new Error('Error');
            listsService.deleteList = jest.fn().mockRejectedValue(error);
            await listsController.deleteList(req, res, next);
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: error.message });
        });
    }
    );
});
