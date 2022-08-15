export class Matricula{
    codigo: number
    codigo_aluno: number
    codigo_curso: number

    constructor(codigo_aluno: number, codigo_curso : number){
        this.codigo_aluno = codigo_aluno
        this.codigo_curso = codigo_curso
    }
}