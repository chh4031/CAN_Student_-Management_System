const express = require('express');
const router = express.Router();

const detailRouter = require('../controller/detailController');

// 디테일 페이지 보여주기 라우터
router.get('/', detailRouter.detailView)

module.exports = router;