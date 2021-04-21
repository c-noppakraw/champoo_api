const express = require('express');
const service = require('./history.service');

const showHistory = async (req, res, next) => {
    try {
        const history = await service.setHistory();
        return res.status(201).json({ data: history });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { showHistory };