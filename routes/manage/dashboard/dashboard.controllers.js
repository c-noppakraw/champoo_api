const express = require('express');
const { validationResult } = require('express-validator');
const service = require('./dashboard.service');

const showDashboard = async (req, res, next) => {
    try {
        const dashboard = await service.setDashboard();
        return res.status(201).json({ data: dashboard });
    } catch (error) {
        console.log(error);
    }
};

const createDashboard = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const adminCreate = req.user.name;
        const data = {
            title: req.body.title,
            content: req.body.content,
            adminCreate: adminCreate,
        }
        const dashboard = await service.save(data);
        return res.status(201).json({ data: dashboard });
    } catch (error) {
        console.log(error);
    }
};

const editDashboard = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const id = req.params.id;
        const data = {
            title: req.body.title,
            content: req.body.content,
        }
        const dashboard = await service.saveEdit(id, data);
        return res.status(201).json({ data: dashboard });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { showDashboard, createDashboard, editDashboard };