const Dashboard = require('./dashboard.model');
const dayjs = require('dayjs');

const setDashboard = async () => {
    try {
        let dashboard = await Dashboard.getAllDashboard();
        return dashboard;
    } catch (error) {
        console.log(error);
    }
}

const save = async (data) => {
    try {
        let day = dayjs().format();
        data = new Dashboard ({
            title: data.title,
            content: data.content,
            adminCreate: data.adminCreate,
            visible: 1,
            dateCreate: day,
            dateUpdate: day,
        });
        let dashboard = await Dashboard.createDashboard(data);
        return dashboard;
    } catch (error) {
        console.log(error);
    }
};

const getOneDashboardById = async (id) => {
    try {
        const dashboard = await Dashboard.getOneDashboardById(id);
        return dashboard;
    } catch (error) {
        console.log(error);
    }
}

const saveEdit = async (id, data) => {
    try {
        let day = dayjs().format();
        data = new Dashboard ({
            title: data.title,
            content: data.content,
            dateUpdate: day,
        });
        const dashboard = await Dashboard.updateDashboard(id, data);
        return dashboard;
    } catch (error) {
        console.log(error);
    }
}

const deleteDashboard = async (id) => {
    try {
        let day = dayjs().format();
        data = new Dashboard ({
            visible: 0,
            dateUpdate: day,
        });
        const dashboard = await Dashboard.deleteDashboard(id, data);
        return dashboard;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { setDashboard, save, getOneDashboardById, saveEdit, deleteDashboard };