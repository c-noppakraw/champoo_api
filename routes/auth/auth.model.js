const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminScema = new Schema({
    id:{
        type: Schema.Types.ObjectId
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    adminCreate:{
        type: String,
        required: true
    },
    status:{
        type: Number,
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

const Admins = module.exports = mongoose.model('admins', adminScema);
module.exports.createAdmin = (newAdmins) => {
    return Admins.create(newAdmins)
};
module.exports.getOneAdmin = (username) => {
    const query = {
        username: username,
    }
    return Admins.findOne(query);
}
module.exports.getOneAdminById = (id) => {
    const query = {
        _id: id,
    }
    return Admins.findOne(query);
}
module.exports.updateAdmin = (id, data) => {
    const query = {
        _id: id
    }
    return Admins.findByIdAndUpdate(query, {
        $set: {
            password: data.password,
            name: data.name,
            dateUpdate: data.dateUpdate
        }
    },{ new: true });
};
module.exports.deleteAdmin = (id, data) => {
    const query = {
        _id: id
    }
    return Admins.findByIdAndUpdate(query, {
        $set: {
            visible: data.visible,
            dateUpdate: data.dateUpdate
        }
    },{ new: true });
};
