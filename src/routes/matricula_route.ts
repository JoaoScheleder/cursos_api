import MatriculaService from "../services/matricula_service";
import { Router } from "express";
import { Matricula } from "../models/matricula";

const matricula_router = Router()

// LISTA TODOS OS CURSOS DE UM ALUNO
matricula_router.get('/matriculas/aluno/:id',async (req, res, _) => {
    const id = Number.parseInt(req.params.id)
    try{
        const data = await MatriculaService.getCursosAluno(id)
        res.status(200).send(data)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

// LISTA TODOS OS ALUNOS DE UM CURSO
matricula_router.get('/matriculas/curso/:id',async (req, res, _) => {
    const id = Number.parseInt(req.params.id)
    try{
        const data = await MatriculaService.getAlunosCurso(id)
        res.status(200).send(data)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

// ADICIONA UMA MATRICULA
matricula_router.post('/matriculas',async (req, res, next) => {

    const {codigo_aluno, codigo_curso} = req.body
    const cursoAluno = new Matricula(codigo_aluno, codigo_curso)
    try{
        await MatriculaService.create(cursoAluno)
        res.status(201).send(cursoAluno)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
    
})

// MODIFICA UMA MATRICULA
matricula_router.put('/matriculas/:id',async (req, res, next) => {
    const id = Number.parseInt(req.params.id)
    const {codigo, codigo_curso} = req.body
    const cursoAluno = new Matricula(codigo, codigo_curso)
    try{
        await MatriculaService.update(cursoAluno, id)
        res.status(204).send(`resource updated successfully`)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

// DELETA UMA MATRICULA
matricula_router.delete('/matriculas/:id',async (req, res, _) => {
    const id = Number.parseInt(req.params.id)
    try{
        await MatriculaService.delete(id)
        res.status(204).send(`resource deleted successfully`)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

export default matricula_router