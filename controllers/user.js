const { response, request } = require('express')

const getUsers = (req = request, res = response) => {
    const { query } = req.query;
    res.json({ msg: 'Get API - controller', query })
}
const putUsers = (req, res = response) => {
    const userId = req.params.id;
    res.json({ msg: 'Put API - controller', userId })
}
const postUsers = (req, res = response) => {
    const { name, age } = req.body;
    res.json({ msg: 'Post API - controller', name, age })
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