const Admins = require('../auth.model');
const dayjs = require('dayjs');
const bcrypt = require('bcryptjs');

const encode = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
		password = await bcrypt.hash(password, salt);
        return password;
    } catch (error) {
        console.log(error);
    }
}

const save = async (data) => {
    try {
        let day = dayjs().format();
        data = new Admins ({
            username: data.username,
            password: data.password,
            name: data.name,
            adminCreate: 'ga1',
            status: 1,
            visible: 1,
            dateCreate: day,
            dateUpdate: day,
        });
        let user = await Admins.createAdmin(data);
        return user;
    } catch (error) {
        console.log(error);
    }
};

const matchUsername = async (username) => {
    try {
        const user = await Admins.getOneAdmin(username);
        return user;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { encode, save, matchUsername };