const useDB = require("../../middleware/db");

let checkButton = 0;

// 로그인 이후 상세화면 보여주기
const detailView = async(req, res) => {

    checkButton = 1;
    
    return res.render("detail", {
        check : checkButton
    })
}

module.exports = {detailView}