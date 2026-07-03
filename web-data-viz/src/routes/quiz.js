var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar de quizController.js
router.get("/totalquiz/:idquiz", function (req, res) {
    quizController.totalquiz(req, res);
})

router.post("/quizBuscar", function (req, res) {
    quizController.quizBuscar(req, res);
})

router.get("/rank", function (req, res) {
    quizController.rank_acertomax(req, res);
})

module.exports = router;