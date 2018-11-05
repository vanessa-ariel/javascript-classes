class Women {
    constructor(nome, signo, cor_do_cabelo, etnia){
        this.nome = nome;
        this.altura = 0.4;
        this.signo = signo;
        this.cor_do_cabelo = cor_do_cabelo;
        this.id_genero = "F";
        this.profissao = []
    }
    pintar_o_cabelo (cor){
        this.cor_do_cabelo = cor
    }
    contratar (){
        this.profissao.push(...arguments)
    }
    crescer (){
        let nova_altura = this.altura + 0.01
        this.altura = parseFloat (nova_altura.toFixed(2))
    }
}

const ariel = new Women ("Vanessa Ariel", "Sagitário", "Preto")

// function Women (nome, signo, cor_do_cabelo, etnia){ //constructor functions always start with capitalized letters. The function receives the common methods for every function
//     this.nome = nome;
//     this.altura = 0.4;
//     this.signo = signo;
//     this.cor_do_cabelo = cor_do_cabelo;
//     this.id_genero = "F";
//     this.profissao = []
//     this.pintar_o_cabelo = function (cor){
//         this.cor_do_cabelo = cor
//     }
//     this.contratar = function(){
//         this.profissao.push(...arguments)
//     }
//     this.crescer = function (){
//         let nova_altura = this.altura + 0.01
//         this.altura = parseFloat (nova_altura.toFixed(2))
//     }
// }