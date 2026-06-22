var database = require("../database/config");

function buscarAquariosPorEmpresa(id) {

  var instrucaoSql = `SELECT * FROM aquario a WHERE fkusuario = ${id}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(id, descricao) {
  
  var instrucaoSql = `INSERT INTO (descricao) aquario VALUES (${descricao}, ${id})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarAquariosPorEmpresa,
  cadastrar
}
