const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const getUsers = (req = request, res = response) => {
    const { query } = req.query;
    res.json({ msg: 'Get API - controller', query })
}

const putUsers = (req, res = response) => {
    const userId = req.params.id;
    res.json({ msg: 'Put API - controller', userId })
}

const postUsers = async (req, res = response) => {
   
    const { name, mail, password, role } = req.body;
    const user = new User({ name, mail, password, role });

    //Encrypt password
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    //Save on DB
    await user.save();

    res.json({  user })
}

const deleteUsers = (req, res = response) => {
    res.json({ msg: 'Delete API - controller' })
}


module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
}