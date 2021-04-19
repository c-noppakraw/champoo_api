const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioScema = new Schema({
    id:{
        type: Schema.Types.ObjectId
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    dateDebut:{
        type: Date,
        required: true
    },
    adminCreate:{
        type: String,
        required: true
    },
    visible:{
        type: Number,
        required: true
    },
    dateCreate:{
        type: Date,
        required: true
    },
    dateUpdate:{
        type: Date,
        required: true
    },
});

const Portfolio = module.exports = mongoose.model('portfolios', portfolioScema);
module.exports.getAllPortfolio = () => {
    return Portfolio.find()
};
module.exports.createPortfolio = (newPortfolio) => {
    return Portfolio.create(newPortfolio)
};
module.exports.getOnePortfolioById = (id) => {
    const query = {
        _id: id,
    }
    return Portfolio.findOne(query);
}
module.exports.updatePortfolio = (id, data) => {
    const query = {
        _id: id
    }
    return Portfolio.findByIdAndUpdate(query, {
        $set: {
            title: data.title,
            content: data.content,
            dateDebut: data.dateDebut,
            dateUpdate: data.dateUpdate
        }
    },{ new: true });
};
module.exports.deletePortfolio = (id, data) => {
    const query = {
        _id: id
    }
    return Portfolio.findByIdAndUpdate(query, {
        $set: {
            visible: data.visible,
            dateUpdate: data.dateUpdate
        }
    },{ new: true });
};
module.exports.setPortfolio = () => {
    return Portfolio.find().sort({ dateDebut: 'asc'});
}