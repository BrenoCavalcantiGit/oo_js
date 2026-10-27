const Animal = require('./Animal');

class Gato extends Animal {
    constructor(nome, idade, corDoPelo) {
        super(nome, idade);
        this.corDoPelo = corDoPelo;
    }

    emitirSom() {
        return 'Miau!';
    }

    arranharSofa() {
        return `${this.nome} arranhou o sofá.`;
    }
}

module.exports = Gato;
