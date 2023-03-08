const { Lists } = require("../../database/models");
const { Users } = require("../../database/models");
const { HTTPError } = require("../utils/errors.js");

const getAllLists = async () => {
    const lists = await Lists.findAll({
    });
    return lists;
};

const createList = async (data) => {
    data ={...data, userId: 1}
    const list = await Lists.create(data);
    return list;
};

const getListById = async (id) => {
    const list = await Lists.findOne({
        where: {
            id: id
        },
        include: "Tasks"
    });
    if (list == null) {
        throw new HTTPError(404, "List not found");
    }
    return list;
};

const updateList = async (id, data) => {
    const result = await Lists.update(data, {
        where: {
            id: id
        }, returning: true
    });
    const affectedRows = result[0];
    if (affectedRows === 0) {
        throw new HTTPError(404, "List not found");
    }
    return result;
};

const deleteList = async (id) => {
    await Lists.destroy({
        where: {
            id: id
        }
    });
};

module.exports = { getAllLists, createList, getListById, updateList, deleteList };