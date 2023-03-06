const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, putUsers, postUsers, deleteUsers } = require('../controllers/user');
const { isValidRole, emailExists } = require('../helpers/db-validators');
const { validateFields } = require('../middlewares/fields-validation');

const router = Router();

router.get('/', getUsers);

router.put('/:id', putUsers);

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('password', 'Password is too short').isLength({ min: 6 }),
    check('mail', 'mail is not valid').isEmail(),
    check('mail').custom(emailExists),
    check('role').custom(isValidRole),
    validateFields
], postUsers);

router.delete('/', deleteUsers);

module.exports = router;

