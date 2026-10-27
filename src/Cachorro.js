const Animal = require('./Animal');

// Herança: Cachorro herda nome, idade e apresentar() de Animal
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);
        this.raca = raca;
    }

    // Polimorfismo: mesmo método, comportamento próprio
    emitirSom() {
        return 'Au au!';
    }

    buscarBolinha() {
        return `${this.nome} foi buscar a bolinha.`;
    }
}

module.exports = Cachorro;
