const express = require('express');
const router = express.Router();

const detailRouter = require('../controller/detailController');

// 디테일 페이지 보여주기 라우터
router.get('/', detailRouter.detailView)

// 부원 정보 관리를 눌렀을때 작동 라우터
router.get('/selectUser', detailRouter.selectUserInfo)

module.exports = router;