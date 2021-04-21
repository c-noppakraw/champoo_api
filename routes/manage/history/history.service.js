const History = require('./history.model');
const dayjs = require('dayjs');

const setHistory = async () => {
    try {
        let history = await History.setHistory();
        return history;
    } catch (error) {
        console.log(error);
    }
}

const save = async (data) => {
    try {
        let day = dayjs().format();
        data = new History ({
            profile: data.profile,
            title: data.title,
            content: data.content,
            adminCreate: data.adminCreate,
            dateCreate: day,
            dateUpdate: day,
        });
        let history = await History.createHistory(data);
        return history;
    } catch (error) {
        console.log(error);
    }
};

const getOneHistoryById = async (id) => {
    try {
        const history = await History.getOneHistoryById(id);
        return history;
    } catch (error) {
        console.log(error);
    }
}

const saveEdit = async (id, data) => {
    try {
        let day = dayjs().format();
        data = new History ({
            title: data.title,
            content: data.content,
            adminCreate: data.adminCreate,
            dateUpdate: day,
        });
        const history = await History.updateHistory(id, data);
        return history;
    } catch (error) {
        console.log(error);
    }
}

const saveProfile = async (id, data) => {
    try {
        let day = dayjs().format();
        data = new History ({
            profile: data.profile,
            adminCreate: data.adminCreate,
            dateUpdate: day,
        });
        const history = await History.updateProfile(id, data);
        return history;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { setHistory, save, getOneHistoryById, saveEdit, saveProfile };