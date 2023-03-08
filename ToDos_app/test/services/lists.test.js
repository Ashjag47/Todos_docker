const { Lists } = require("../../database/models");
const { Users } = require("../../database/models");
const listsService = require("../../src/services/lists");

describe('Lists Service', () => {
    describe('getAllLists', () => {
        it('should return all lists', async () => {
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
            jest.spyOn(Lists, 'findAll').mockResolvedValue(lists);
            const result = await listsService.getAllLists();
            expect(result).toEqual(lists);
        });
    });
    describe('createList', () => {
        it('should create a list', async () => {
            const data = {
                name: 'List 1'
            };
            const list = {
                "id": 1,
                "name": "List 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "userId": 1
            };
            jest.spyOn(Lists, 'create').mockResolvedValue(list);
            const result = await listsService.createList(data);
            expect(result).toEqual(list);
        });
    });
    describe('getListById', () => {
        it('should return a list', async () => {
            const id = 1;
            const list = {
                "id": 1,
                "name": "List 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "userId": 1
            };
            jest.spyOn(Lists, 'findOne').mockResolvedValue(list);
            const result = await listsService.getListById(id);
            expect(result).toEqual(list);
        });
        it('should throw an error if list not found', async () => {
            const id = 1;
            const list = null;
            jest.spyOn(Lists, 'findOne').mockResolvedValue(list);
            try {
                await listsService.getListById(id);
            } catch (error) {
                expect(error.message).toEqual("List not found");
            }
        }
        );
    });
    describe('updateList', () => {
        it('should update a list', async () => {
            const id = 1;
            const data = {
                name: 'List 1'
            };
            const list = {
                "id": 1,
                "name": "List 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "userId": 1
            };
            jest.spyOn(Lists, 'update').mockResolvedValue(list);
            const result = await listsService.updateList(id, data);
            expect(result).toEqual(list);
        });
        it('should throw an error if list not found', async () => {
            const id = 1;
            const data = {
                name: 'List 1'
            };
            const result = [0];
            jest.spyOn(Lists, 'update').mockResolvedValue(result);
            try {
                await listsService.updateList(id, data);
            } catch (error) {
                expect(error.message).toEqual("List not found");
            }
        }
        );
    });
    describe('deleteList', () => {
        it('should delete a list', async () => {
            const id = 1;
            const list = {
                "id": 1,
                "name": "List 1",
                "createdAt": "2020-10-15T16:30:00.000Z",
                "updatedAt": "2020-10-15T16:30:00.000Z",
                "userId": 1
            };
            jest.spyOn(Lists, 'destroy').mockResolvedValue();
            const result = await listsService.deleteList(id);
            expect(result).toEqual(undefined);
        });
    });
});
