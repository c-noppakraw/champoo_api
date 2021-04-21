const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historyScema = new Schema({
    id:{
        type: Schema.Types.ObjectId
    },
    profile:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    adminCreate:{
        type: String,
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

const History = module.exports = mongoose.model('historys', historyScema);
module.exports.setHistory = () => {
    return History.find()
};
module.exports.createHistory = (newHistory) => {
    return History.create(newHistory)
};
module.exports.getOneHistoryById = (id) => {
    const query = {
        _id: id,
    }
    return History.findOne(query);
}
module.exports.updateHistory = (id, data) => {
    const query = {
        _id: id
    }
    return History.findByIdAndUpdate(query, {
        $set: {
            title: data.title,
            content: data.content,
            adminCreate: data.adminCreate,
            dateUpdate: data.dateUpdate,
        }
    },{ new: true });
};
module.exports.updateProfile = (id, data) => {
    const query = {
        _id: id
    }
    return History.findByIdAndUpdate(query, {
        $set: {
            profile: data.profile,
            adminCreate: data.adminCreate,
            dateUpdate: data.dateUpdate,
        }
    },{ new: true });
};