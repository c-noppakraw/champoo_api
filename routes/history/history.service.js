const History = require('../manage/history/history.model');

const setHistory = async () => {
    try {
        let history = await History.setHistory();
        return history;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { setHistory };