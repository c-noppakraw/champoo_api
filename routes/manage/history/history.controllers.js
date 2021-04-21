const express = require('express');
const { validationResult } = require('express-validator');
const service = require('./history.service');

const showHistory = async (req, res, next) => {
    try {
        const history = await service.setHistory();
        return res.status(201).json({ data: history });
    } catch (error) {
        console.log(error);
    }
}

const createHistory = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const adminCreate = req.user.name;
        const data = {
            profile: req.file.filename,
            title: req.body.title,
            content: req.body.content,
            adminCreate: adminCreate,
        }
        const history = await service.save(data);
        return res.status(201).json({ data: history });
    } catch (error) {
        console.log(error);
    }
};

const setHistory = async (req, res, next) => {
    try {
        const id = req.params.id;
        const history = await service.getOneHistoryById(id);
        return res.status(201).json({ data: history });
    } catch (error) {
        console.log(error);
    }
}

const editHistory = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const adminCreate = req.user.name;
        const id = req.params.id;
        const data = {
            title: req.body.title,
            content: req.body.content,
            adminCreate: adminCreate,
        }
        const history = await service.saveEdit(id, data);
        return res.status(201).json({ data: history });
    } catch (error) {
        console.log(error);
    }
}

const editProfile = async (req, res, next) => {
    try {
        const adminCreate = req.user.name;
        const id = req.params.id;
        const data = {
            profile: req.file.filename,
            adminCreate: adminCreate,
        }
        const history = await service.saveProfile(id, data);
        return res.status(201).json({ data: history });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { showHistory, createHistory, setHistory, editHistory, editProfile };