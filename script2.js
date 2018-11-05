class Coordinate {
    constructor(nome, x_position , y_position){
        this.nome = nome
        this.x = x_position
        this.y = y_position
    }
    mover_horizontalmente(distancia){
        this.x += distancia
        return this.x
    }
    mover_verticalmente(distancia){
        this.y += distancia
        return this.y
    }
}
const ponto = new Coordinate("Pontinho", 0, 0)
ponto.mover_horizontalmente(5)