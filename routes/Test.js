const express = require('express');
var router = express.Router();
const {Test} = require('./../controller/Test');
router.post('/',Test);

module.exports = router