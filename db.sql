
create database cursos_vr if not exists
create table if not exists curso (
codigo int not null auto_increment primary key,
descricao varchar(50) not null,
ementa text not null);
create table if not exists aluno (
codigo int not null auto_increment primary key,
nome  varchar(50) not null);
create table if not exists curso_aluno (
codigo int not null auto_increment primary key,
codigo_aluno int not null,
codigo_curso int not null,
foreign key(codigo_aluno) references aluno(codigo) on delete cascade,
foreign key (codigo_curso) references curso(codigo) on delete cascade
);
alter table curso_aluno
add constraint uq_aluno_curso unique (codigo_aluno, codigo_curso);
     