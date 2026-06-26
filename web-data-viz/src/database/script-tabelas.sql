-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database steven;

use steven;

create table usuario(
idusuario int primary key auto_increment not null,
nome varchar(45) unique not null,
email varchar(145) unique not null,
senha varchar(145) unique not null
);

create table fusao(
idfusao int primary key auto_increment not null,
nome varchar(45) not null,
data datetime default current_timestamp,
fkusuario int,
constraint fusao_usuario foreign key (fkusuario) references usuario(idusuario)
);

create table quiz(
idquiz int primary key auto_increment not null,
acertos int not null,
erros int not null,
fkquiz int,
quizData datetime default current_timestamp,
constraint quiz_usuario foreign key (fkquiz) references usuario(idusuario)
);