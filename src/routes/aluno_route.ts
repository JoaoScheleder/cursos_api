import AlunoService from '../services/aluno_service'
import { Router } from "express";
import { Aluno } from "../models/aluno";

const alunos_router = Router()

// LISTA TODOS OS ALUNOS
alunos_router.get('/alunos',async (req, res, _) => {
    try{
        const data = await AlunoService.getAll()
        res.status(200).send(data)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

// ALUNO POR ID
alunos_router.get('/alunos/:id',async (req, res, _) => {
    const id = Number.parseInt(req.params.id)
    try{
        const data = await AlunoService.getById(id)
        res.status(200).send(data)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

// CRIAR ALUNO
alunos_router.post('/alunos',async (req, res, _) => {
    const aluno = new Aluno(req.body.nome)
    try{
        await AlunoService.create(aluno)
        res.status(201).send(aluno)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

// ATUALIZAR ALUNO
alunos_router.put('/alunos/:id',async (req, res, _) => {
    const id = Number.parseInt(req.params.id)
    const aluno = new Aluno(req.body.nome)
    try{
        await AlunoService.update(aluno, id)
        res.status(204).send(`resource updated successfully`)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

// DELETAR ALUNO
alunos_router.delete('/alunos/:id',async (req, res, _) => {
    const id = Number.parseInt(req.params.id)
    try{
        await AlunoService.delete(id)
        res.status(204).send(`resource deleted successfully`)
    }
    catch(error){
        res.status(500).send(`Internal Server Error: ${error}`)
    }
})

export default alunos_router