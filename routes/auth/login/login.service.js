const express = require('express');
const jwt = require('jsonwebtoken');
const Admins = require('../auth.model');
const bcrypt = require('bcryptjs');

const checkData = async (username, password) => {
    try {
        let payload = '';
        const user = await Admins.getOneAdmin(username);
        if(user.visible === 0) return payload; 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return payload;
        const data = {
            username: user.username,
            password: user.password,
            name: user.name,
        };
        const token = await setToken(data);
        payload = {
            id:user._id,
            username: user.username,
            name: user.name,
            token: token,
        }
        return payload;
    } catch (error) {
        console.log(error);
    }
}

const setToken = async (data) => {
    try {
        const token = jwt.sign(data, `secret_key_here`, {
            expiresIn: 3600 * 3
        });
        return token;
    } catch (error) {
        console.log(error);
    }
}

const matchData = async (username, password) => {
    try {
        const user = await Admins.getOneAdmin(username);
        return user;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { checkData, matchData };