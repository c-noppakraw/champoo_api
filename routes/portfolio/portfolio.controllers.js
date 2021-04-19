const express = require('express');
const service = require('./portfolio.service');

const showPortfolio = async (req, res, next) => {
    try {
        const portfolio = await service.setPortfolio();
        return res.status(201).json({ data: portfolio });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { showPortfolio };