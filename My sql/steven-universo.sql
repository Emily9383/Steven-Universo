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

select  acertos, erros, quizData from  quiz where fkquiz = 1 order by idquiz desc limit 1;

insert into quiz(idquiz, acertos, erros, fkquiz, quizData) values
(1, 2, 5, 1, "2016-08-24 14:09:45"),
(2, 2, 5, 1, "2016-08-24 15:09:45"),
(3, 2, 5, 1, "2016-08-24 16:09:45"),
(4, 2, 5, 1, "2016-08-24 17:09:45");

insert into quiz(idquiz, acertos, erros, fkquiz, quizData) values
(7, 2, 5, 5, "2016-08-24 14:09:45"),
(8, 2, 5, 5, "2016-08-24 15:09:45"),
(9, 2, 5, 5, "2016-08-24 16:09:45"),
(10, 2, 5, 5, "2016-08-24 17:09:45");

select *from usuario;

insert into quiz(idquiz, acertos, erros, fkquiz, quizData) values
(11, 10, 5, 5, "2016-08-24 14:09:45");

insert into quiz(idquiz, acertos, erros, fkquiz, quizData) values
(5, 5, 5, 1, "2016-08-24 17:10:45");

insert into quiz(idquiz, acertos, erros, fkquiz, quizData) values
(6, 12, 0, 1, "2016-08-24 17:10:45");

select count(idquiz) as totalquiz, max(acertos) as acertos_max, floor(sum(acertos) / count(idquiz)) as media from quiz where fkquiz = 1;

select max(acertos) as acertos_max from quiz where fkquiz = 1;

select  acertos, erros, DATE_FORMAT(quizData,"%d-%m-%Y %H:%i") as quizData from quiz 
                        where fkquiz = 1 
                        order by idquiz desc limit 1; 

select floor(sum(acertos) / count(idquiz)) as media from quiz where  fkquiz = 1;

select u.nome, max(q.acertos) as acertos_max from usuario as u inner join quiz as q on u.idusuario = q.fkquiz group by u.idusuario, u.nome;
 
select *from quiz;