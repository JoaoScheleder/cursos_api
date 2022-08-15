export class Aluno  {
    codigo: number
    nome!: string
    
    constructor(nome: string){
        this.nome = nome
    }

    public toString = () : string => {
        return this.nome
    }
}