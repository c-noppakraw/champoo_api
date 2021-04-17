const express = require('express');
const { validationResult } = require('express-validator');
const { getOneAdmin } = require('../../auth/auth.model');
const service = require('./admin.service');

const createAdmin = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const adminCreate = req.user.name;
        const password = await service.encode(req.body.password);
        const data = {
            username: req.body.username,
            password: password,
            name: req.body.name,
            adminCreate: adminCreate,
        }
        const user = await service.save(data);
        return res.status(201).json({ data: user });
    } catch (error) {
        console.log(error);
    }
};

const setAdmin = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await service.getOneAdminById(id);
        return res.status(201).json({ data: user });
    } catch (error) {
        console.log(error);
    }
}

const editAdmin = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const id = req.params.id;
        const password = await service.encode(req.body.password);
        const data = {
            password: password,
            name: req.body.name,
        }
        const user = await service.saveEdit(id, data);
        return res.status(201).json({ data: user });
    } catch (error) {
        console.log(error);
    }
}

const deleteAdmin = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await service.deleteAdmin(id);
        return res.status(200).json({ data: user });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { createAdmin, setAdmin, editAdmin, deleteAdmin };