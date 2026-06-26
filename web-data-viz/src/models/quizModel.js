var database = require("../database/config")

function totalquiz(idAquario) {
    var instrucaoSql = `select count(idquiz) as totalquiz, max(acertos) as acertos_max from quiz where fkquiz = ${idAquario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    totalquiz
}