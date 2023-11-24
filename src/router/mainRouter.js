const express = require('express');
const router = express.Router();

const mainRouter = require('../controller/mainController');

// 메인화면 보여주는 라우터
router.get('/', mainRouter.mainView)

// 로그인 발동시 라우터
router.post('/login', mainRouter.mainLogin)

module.exports = router;