const express = require('express');
const { validationResult } = require('express-validator');
const service = require('./register.service');

const register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const password = await service.encode(req.body.password);
        const data = {
            username: req.body.username,
            password: password,
            name: req.body.name,
        }
        const user = await service.save(data);
        return res.status(201).json({ data: user });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { register };