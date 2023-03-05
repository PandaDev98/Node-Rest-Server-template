const { response } = require('express')

const getUsers = (req, res = response) => {
    res.json({ msg: 'Get API - controller' })
}
const putUsers = (req, res = response) => {
    res.json({ msg: 'Put API - controller' })
}
const postUsers = (req, res = response) => {
    res.json({ msg: 'Post API - controller' })
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