import pool from "../connection";
import { Curso } from "../models/curso";
import {promisify} from 'util'

class CursoService {

    query = promisify(pool.query).bind(pool);

    getAll(){
        return this.query('select * from curso')
    }
    
    getById(id: number){
        return this.query(`
        select 
        * 
        from curso 
        where codigo = (?)
        `,[id])
    }
    
    delete(id: number){
        return this.query(`
        delete from curso 
        where codigo = (?)
        `,[id])
    }
    update(curso : Curso, id: number){
        return this.query(`
        update curso set 
        descricao = (?),
        ementa = (?)
        where codigo = (?)`,[curso.descricao, curso.ementa, id])
    }
    
    create(curso : Curso){
        return this.query(`
        insert into curso values
        (default, (?), (?))
        `,[curso.descricao, curso.ementa])
    }
}

export default new CursoService()