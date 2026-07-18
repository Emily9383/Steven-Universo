var database = require("../database/config")

function totalquiz(idAquario) {
    var instrucaoSql = `select count(idquiz) as totalquiz, 
                        ifnull( max(acertos),0 )as acertos_max, 
                        ifnull( floor(sum(acertos) / count(idquiz)),0) as media 
                        from quiz where fkquiz = ${idAquario};`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quizBuscar(acertos, erros, idusuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quizBuscar():", acertos, erros, idusuario);

    // Insira exatamente a query do banco aqui, lembrando da acertosnclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO quiz (acertos, erros, fkquiz) VALUES (${acertos}, ${erros}, ${idusuario} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function rank_acertomax() {

    var instrucaoSql = `select u.nome, q.acertos, q.fkquiz, q.quizData as quiz_data 
    from quiz as q join (select q.fkquiz, min(q.quizData) as data_quiz 
    from  usuario as u  inner join quiz as q on u.idusuario = q.fkquiz group by q.fkquiz) 
    as datas on q.fkquiz = datas.fkquiz and q.quizData = datas.data_quiz 
    join usuario as u on u.idusuario = q.fkquiz ORDER BY acertos desc;`
    return database.executar(instrucaoSql);
}

module.exports = {
    totalquiz,
    quizBuscar,
    rank_acertomax
}