// Classe abstrata: representa a ideia geral de "animal".
// Ela não deve ser instanciada diretamente, só herdada.
class Animal {
    // Encapsulamento: atributos privados (só acessíveis dentro da classe)
    #nome;
    #idade;

    constructor(nome, idade) {
        // Abstração: impede criar um "Animal" genérico
        if (new.target === Animal) {
            throw new Error('Animal é uma classe abstrata e não pode ser instanciada.');
        }
        this.#nome = nome;
        this.#idade = idade;
    }

    // Getters e setters controlam o acesso aos atributos privados
    get nome() {
        return this.#nome;
    }

    get idade() {
        return this.#idade;
    }

    set idade(novaIdade) {
        if (typeof novaIdade !== 'number' || novaIdade < 0) {
            throw new Error('Idade inválida.');
        }
        this.#idade = novaIdade;
    }

    // Método abstrato: cada subclasse precisa criar o seu (polimorfismo)
    emitirSom() {
        throw new Error('O método emitirSom() deve ser implementado na subclasse.');
    }

    // Método herdado por todas as subclasses
    apresentar() {
        return `${this.nome}, ${this.idade} ano(s), faz: ${this.emitirSom()}`;
    }
}

module.exports = Animal;
