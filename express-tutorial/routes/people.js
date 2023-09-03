const express = require('express');
const router = express.Router();

const { getPeople, addPeople, addPostMan } = require('../controlles/people');

router.route('/').get(getPeople).post(addPeople)
router.route('/postman').post(addPostMan)

module.exports = router