const useDB = require("../../middleware/db");

// 로그인 이후 상세화면 보여주기
const detailView = async(req, res) => {
    return res.render("detail")
}

module.exports = {detailView}