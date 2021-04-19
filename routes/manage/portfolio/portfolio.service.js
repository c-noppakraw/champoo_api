const Portfolio = require('./portfolio.model');
const dayjs = require('dayjs');

const setPortfolio = async () => {
    try {
        let portfolio = await Portfolio.getAllPortfolio();
        return portfolio;
    } catch (error) {
        console.log(error);
    }
}

const save = async (data) => {
    try {
        let day = dayjs().format();
        data = new Portfolio ({
            title: data.title,
            content: data.content,
            dateDebut: data.dateDebut,
            adminCreate: data.adminCreate,
            visible: 1,
            dateCreate: day,
            dateUpdate: day,
        });
        let portfolio = await Portfolio.createPortfolio(data);
        return portfolio;
    } catch (error) {
        console.log(error);
    }
};

const getOnePortfolioById = async (id) => {
    try {
        const portfolio = await Portfolio.getOnePortfolioById(id);
        return portfolio;
    } catch (error) {
        console.log(error);
    }
}

const saveEdit = async (id, data) => {
    try {
        let day = dayjs().format();
        data = new Portfolio ({
            title: data.title,
            content: data.content,
            dateDebut: data.dateDebut,
            dateUpdate: day,
        });
        const portfolio = await Portfolio.updatePortfolio(id, data);
        return portfolio;
    } catch (error) {
        console.log(error);
    }
}

const deletePortfolio = async (id) => {
    try {
        let day = dayjs().format();
        data = new Portfolio ({
            visible: 0,
            dateUpdate: day,
        });
        const portfolio = await Portfolio.deletePortfolio(id, data);
        return portfolio;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { setPortfolio, save, getOnePortfolioById, saveEdit, deletePortfolio };