import pool from "../connection";
import { Matricula } from "../models/matricula";
import {promisify} from 'util'

class MatriculaService {
    
    query = promisify(pool.query).bind(pool);

    getCursosAluno(id: number){
        return this.query(`
        select c.*,ca.codigo as codigo_matricula from curso_aluno as ca
        left join curso c on c.codigo = ca.codigo_curso
        left join aluno a on a.codigo = ca.codigo_aluno
        where ca.codigo_aluno = (?)
        `,[id])
    }

    getAlunosCurso(id: number){
        return this.query(`
        select a.*,ca.codigo as codigo_matricula from curso_aluno as ca
        left join curso c on c.codigo = ca.codigo_curso
        left join aluno a on a.codigo = ca.codigo_aluno
        where ca.codigo_curso = (?)
        `,[id])
    }

    delete(id: number){
        return this.query(`
        delete from curso_aluno where codigo = (?)
        `,[id])
    }

    update(matricula : Matricula, id: number){
        return this.query(`
        update curso_aluno set 
        codigo_aluno = (?),
        codigo_curso = (?)
        where codigo = (?)`,[matricula.codigo_aluno, matricula.codigo_curso, id])
    }
    
    create(matricula : Matricula){
        return this.query(`
        insert into curso_aluno values
        (default, (?), (?))
        `,[matricula.codigo_aluno, matricula.codigo_curso])
    }
}

export default new MatriculaService()