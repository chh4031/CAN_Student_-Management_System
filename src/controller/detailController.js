const useDB = require("../../middleware/db");
const time = require("../function/time");
const requestIp = require('request-ip');

// 오늘 날짜 추출하는 함수
const today = `${time.time().year}-${time.time().month}-${time.time().date}`

let checkButton = 0;

// 로그인 이후 상세화면 보여주기
const detailView = async(req, res) => {
    //  클라이언트 ip 받아오기
    let userip = requestIp.getClientIp(req).substr(7)

    return res.render("detail", {
        check : checkButton,
        today : today,
        loginId : req.session.loginId,
        userip : userip
    })
}

// 부원정보 조회 페이지 보여주기
const selectUserInfo = async(req, res) =>{
    
    //  클라이언트 ip 받아오기
    let userip = requestIp.getClientIp(req).substr(7)

    // css와 페이지 조정을 위한 변수 수정
    checkButton = 1;

    // 부원 정보 가져오기
    const selectUser = await useDB.query(`
    select * from 부원정보`)

    return res.render("detail", {
        check : checkButton,
        today : today,
        loginId : req.session.loginId,
        userip : userip,
        User : selectUser[0]
    })
}

module.exports = {detailView, selectUserInfo}