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
                        order by idquiz desc limit 2;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasDeRank() {

    var instrucaoSql = `select u.nome, max(q.acertos) as acertos_max 
                        from usuario as u 
                        inner join quiz as q on 
                        u.idusuario = q.fkquiz 
                        group by u.idusuario, u.nome;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasDeRank
}
