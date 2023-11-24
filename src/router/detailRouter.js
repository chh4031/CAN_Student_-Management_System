const express = require('express');
const router = express.Router();

const detailRouter = require('../controller/detailController');

router.get('/', detailRouter.detailView)

module.exports = router;