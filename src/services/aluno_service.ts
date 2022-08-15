import pool from "../connection";
import { Aluno } from "../models/aluno";
import {promisify} from 'util'

class AlunoService {

    query = promisify(pool.query).bind(pool);

    getAll(){
        return this.query('select * from aluno')
    }
    
    getById(id: number){
        return this.query(`
        select 
        * 
        from aluno 
        where codigo = (?)
        `,[id])
    }
    
    delete(id: number){
        return this.query(`
        delete from aluno 
        where codigo = (?)
        `,[id])
    }
    update(aluno : Aluno, id: number){
        return this.query(`
        update aluno 
        set nome = (?)
        where codigo = (?)`,[aluno.nome, id])
    }
    
    create(aluno : Aluno){
        return this.query(`
        insert into aluno values
        (default, (?))
        `,[aluno.nome])
    }
}

export default new AlunoService()