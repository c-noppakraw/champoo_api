const express = require('express');
const { validationResult } = require('express-validator');
const service = require('./portfolio.service');

const showPortfolio = async (req, res, next) => {
    try {
        const portfolio = await service.setPortfolio();
        return res.status(201).json({ data: portfolio });
    } catch (error) {
        console.log(error);
    }
};

const createPortfolio = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const adminCreate = req.user.name;
        const data = {
            title: req.body.title,
            content: req.body.content,
            dateDebut: req.body.dateDebut,
            adminCreate: adminCreate,
        }
        const portfolio = await service.save(data);
        return res.status(201).json({ data: portfolio });
    } catch (error) {
        console.log(error);
    }
};

const setPortfolio = async(req, res, next) => {
    try {
        const id = req.params.id;
        const portfolio = await service.getOnePortfolioById(id);
        return res.status(201).json({ data: portfolio });
    } catch (error) {
        console.log(error);
    }
}

const editPortfolio = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        const id = req.params.id;
        const data = {
            title: req.body.title,
            content: req.body.content,
            dateDebut: req.body.dateDebut,
        }
        const portfolio = await service.saveEdit(id, data);
        return res.status(201).json({ data: portfolio });
    } catch (error) {
        console.log(error);
    }
};

const deletePortfolio = async (req, res, next) => {
    try {
        const id = req.params.id;
        const portfolio = await service.deletePortfolio(id);
        return res.status(200).json({ data: portfolio });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { showPortfolio, createPortfolio, setPortfolio, editPortfolio, deletePortfolio };