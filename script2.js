// :class Coordinate {
//     constructor(nome, x_position , y_position){
//         this.nome = nome
//         this.x = x_position
//         this.y = y_position
//     }
//     mover_horizontalmente(distancia){
//         this.x += distancia
//         return this.x
//     }
//     mover_verticalmente(distancia){
//         this.y += distancia
//         return this.y
//     }
// }
// const ponto = new Coordinate("Pontinho", 0, 0)
// ponto.mover_horizontalmente(5)

const rectangle = {
  altura: 10,
  largura: 30,
  cor: "red",
  unidade: "m",
  area: function (){
    return this.altura * this.largura + this.unidade + "²"
  }
}

// //USING CONSTRUCTOR FUNCTION
// function Rectangle (altura, largura, cor, unidade){
//   this.altura = altura
//   this.largura = largura
//   this.cor = cor
//   this.unidade = unidade
//   this.area = this.altura * this.largura + this.unidade + "²"
//   // this.area = function (){
//   //   return this.altura * this.largura + this.unidade + "²"
//   // }
// }
// const first_rectangle = new Rectangle (25, 50, "purple", "in")

class Rectangle{
  constructor(altura, largura, cor, unidade){
    this.altura = altura
    this.largura = largura
    this.cor = cor
    this.unidade = unidade
    // this.area = this.altura * this.altura + this.unidade + "²"
  }
  area(){
    return this.altura * this.largura + this.unidade + "²"
  }
}

class Square extends Rect {
  constructor (lado, cor, unidade){
    super(lado, lado, cor, unidade)
  }
}