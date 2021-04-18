const Dashboard = require('../manage/dashboard/dashboard.model');

const setDashboard = async () => {
    try {
        let dashboard = await Dashboard.getAllDashboard();
        return dashboard;
    } catch (error) {
        console.log(error);
    }
}

const getOneDashboardById = async (id) => {
    try {
        const dashboard = await Dashboard.getOneDashboardById(id);
        return dashboard;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { setDashboard, getOneDashboardById };