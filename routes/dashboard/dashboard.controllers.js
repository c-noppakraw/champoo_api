const express = require('express');
const service = require('./dashboard.service');

const showDashboard = async (req, res, next) => {
    try {
        const dashboard = await service.setDashboard();
        return res.status(201).json({ data: dashboard });
    } catch (error) {
        console.log(error);
    }
};

const setDashboard = async(req, res, next) => {
    try {
        const id = req.params.id;
        const dashboard = await service.getOneDashboardById(id);
        return res.status(201).json({ data: dashboard });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { showDashboard, setDashboard };