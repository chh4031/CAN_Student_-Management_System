const useDB = require("../../middleware/db");

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
        return res.render("detail")
    }
}

module.exports = {mainView, mainLogin};