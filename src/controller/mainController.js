const useDB = require("../../middleware/db");
const time = require("../function/time");
const requestIp = require('request-ip');

// 오늘 날짜 추출하는 함수
const today = `${time.time().year}-${time.time().month}-${time.time().date}`

// 메인화면 보여주기
const mainView = async(req, res) => {
    return res.render("main")
}

// 로그인 확인하기
const mainLogin = async(req, res) => {

    // id, pwd 가져오기
    const {loginId, loginPwd} = req.body
    
    // id, pwd 있는지 DB로 체크
    const loginCheck = await useDB.query(`
    select * from 관리자 where id = ? and pwd = ?`, [loginId, loginPwd])

    // 로그인 검증
    if(loginCheck[0][0] == undefined){
        console.log('로그인 실패')
        return res.send('<script type = "text/javascript">alert("로그인 실패"); location.href="/";</script>')
    }else{
        console.log('로그인 성공')

        req.session.loginId = loginId
        let userip = requestIp.getClientIp(req).substr(7)

        return res.render("detail", {
            check : 0,
            today : today,
            loginId : req.session.loginId,
            userip : userip,
            User : []
        })
    }
}

module.exports = {mainView, mainLogin};