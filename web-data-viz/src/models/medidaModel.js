var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    var instrucaoSql = `select  acertos, erros, DATE_FORMAT(quizData,"%d-%m-%Y %H:%i") as quizData from 
                         quiz where fkquiz = ${idAquario}
                         order by idquiz desc limit 2`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `select  acertos, erros, DATE_FORMAT(quizData,"%d-%m-%Y %H:%i") as quizData from quiz 
                        where fkquiz = ${idAquario} 
                        order by idquiz desc limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
