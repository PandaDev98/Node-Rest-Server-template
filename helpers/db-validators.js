const Role = require('../models/role');
const User = require('../models/user');

const isValidRole = async (role = "") => {
    const roleExists = await Role.findOne({ role });
    if (!roleExists) {
        throw new Error(`Role: ${role}is not registered on the DB`)
    }
}
const emailExists = async (mail="") => {
    const emailExists = await User.findOne({ mail });
    if (emailExists) {
        throw new Error(`Mail: ${mail} is already been taken`)
    }
}
module.exports = { isValidRole, emailExists }