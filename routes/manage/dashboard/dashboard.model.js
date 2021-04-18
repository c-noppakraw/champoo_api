const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dashboardScema = new Schema({
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

const Dashboard = module.exports = mongoose.model('dashboards', dashboardScema);
module.exports.getAllDashboard = () => {
    return Dashboard.find()
};
module.exports.createDashboard = (newDashboard) => {
    return Dashboard.create(newDashboard)
};
module.exports.getOneDashboardById = (id) => {
    const query = {
        _id: id,
    }
    return Dashboard.findOne(query);
}
module.exports.updateDashboard = (id, data) => {
    const query = {
        _id: id
    }
    return Dashboard.findByIdAndUpdate(query, {
        $set: {
            title: data.title,
            content: data.content,
            dateUpdate: data.dateUpdate
        }
    },{ new: true });
};
module.exports.deleteDashboard = (id, data) => {
    const query = {
        _id: id
    }
    return Dashboard.findByIdAndUpdate(query, {
        $set: {
            visible: data.visible,
            dateUpdate: data.dateUpdate
        }
    },{ new: true });
};
