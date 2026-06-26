var database = require("../database/config")

function totalquiz(idAquario) {
    var instrucaoSql = `select count(idquiz) as totalquiz, max(acertos) as acertos_max from quiz where fkquiz = ${idAquario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quizBuscar(acertos, erros, idusuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quiz():", acertos, erros, idusuario);
    
    // Insira exatamente a query do banco aqui, lembrando da acertosnclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (acertos, erros, fkquiz) VALUES ('${acertos}', '${erros}' '${idusuario}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    totalquiz,
    quizBuscar
}