const Animal = require('./Animal');

class Passaro extends Animal {
    constructor(nome, idade, sabeVoar) {
        super(nome, idade);
        this.sabeVoar = sabeVoar;
    }

    emitirSom() {
        return 'Piu piu!';
    }

    voar() {
        return this.sabeVoar ? `${this.nome} está voando.` : `${this.nome} não sabe voar.`;
    }
}

module.exports = Passaro;
