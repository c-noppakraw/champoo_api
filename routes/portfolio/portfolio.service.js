const Portfolio = require('../manage/portfolio/portfolio.model');
const dayjs = require('dayjs');

const setPortfolio = async () => {
    try {
        let portfolio = await Portfolio.setPortfolio();
        return portfolio;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { setPortfolio };