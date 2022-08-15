export class Curso{
    codigo: number
    descricao!: string
    ementa!: string

    constructor(descricao : string, ementa : string){
        this.ementa = ementa
        this.descricao = descricao
    }

    public toString = () : string => {
        return this.descricao
    }
}