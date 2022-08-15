import CursoService from '../services/curso_service'
import { Router } from "express";
import { Curso } from "../models/curso";

const cursos_router = Router()

// LISTA TODOS OS CURSOS
cursos_router.get('/cursos',async (req, res, _) => {
    try{
        const data = await CursoService.getAll()
        res.status(200).send(data)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
    
})

// CURSO POR ID
cursos_router.get('/cursos/:id',async (req, res, _) => {
    const id = Number.parseInt(req.params.id)
    try{
        const data = await CursoService.getById(id)
        res.status(200).send(data)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
    
})

// CRIAR CURSO
cursos_router.post('/cursos',async (req, res, _) => {
    const {descricao, ementa} = req.body 
    const curso = new Curso(descricao, ementa)

    try{
        await CursoService.create(curso)
        res.status(201).send(curso)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

// ATUALIZAR CURSO
cursos_router.put('/cursos/:id',async (req, res, _) => {
    const {descricao, ementa} = req.body 
    const id = Number.parseInt(req.params.id)
    const curso = new Curso(descricao, ementa)

    try{
        await CursoService.update(curso, id)
        res.status(204).send(`resource updated successfully`)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

// DELETAR CURSO
cursos_router.delete('/cursos/:id',async (req, res, _) => {
    const id = Number.parseInt(req.params.id)
    try{
        await CursoService.delete(id)
        res.status(204).send(`resource deleted successfully`)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

export default cursos_router