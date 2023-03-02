const express = require('express');
const router = express.Router();
const {getAllData,createData,updateData,getOneData} = require('../controllers/UserController')


router.route('/').get(getAllData);
router.route('/:name').get(getOneData);
router.route('/').post(createData);
router.route('/').put(updateData);


module.exports = router; 
