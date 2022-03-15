export default class PortaModel {
    #numero: number
    #temPresente: boolean
    #selecioanada: boolean
    #aberta: boolean

    constructor(numero:number, temPresente=false, selecioanada=false, aberta=false){
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecioanada = selecioanada
        this.#aberta = aberta
    }

    get numero(){
        return this.#numero
    }
    
    get temPresente(){
        return this.#temPresente
    }

    get aberta(){
        return this.#aberta
    }

    get fechada(){
        return !this.#aberta
    }
    
    get selecioanada(){
        return this.#selecioanada
    }

    desselecionar(){
        const selecioanada = false
        return new PortaModel(this.numero, this.temPresente, selecioanada, this.aberta)
    }

    alternativaSelecao(){
        const selecioanada = !this.selecioanada
        return new PortaModel(this.numero, this.temPresente, selecioanada, this.aberta)
    }

    abrir(){
        const aberta = true
        return new PortaModel(this.numero, this.temPresente, this.selecioanada, aberta)
    }
}