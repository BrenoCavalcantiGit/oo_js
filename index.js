const Animal = require('./src/Animal');
const Cachorro = require('./src/Cachorro');
const Gato = require('./src/Gato');
const Passaro = require('./src/Passaro');

// ---------- Instâncias (objetos criados a partir das classes) ----------
const rex = new Cachorro('Rex', 3, 'Labrador');
const mia = new Gato('Mia', 2, 'Branco');
const piu = new Passaro('Piu', 1, true);

// ---------- Herança e métodos próprios ----------
console.log('--- Herança e métodos próprios ---');
console.log(rex.buscarBolinha());
console.log(mia.arranharSofa());
console.log(piu.voar());

// ---------- Polimorfismo: mesmo método, resultados diferentes ----------
console.log('\n--- Polimorfismo ---');
const animais = [rex, mia, piu];
animais.forEach(function (animal) {
    console.log(animal.apresentar());
});

// ---------- Encapsulamento ----------
console.log('\n--- Encapsulamento ---');
console.log('Idade do Rex:', rex.idade);
rex.idade = 4; // usa o setter
console.log('Idade do Rex depois do aniversário:', rex.idade);
rex.nome = 'Outro nome'; // não existe setter para o nome, então nada muda
console.log('Nome do Rex continua:', rex.nome);
try {
    rex.idade = -5;
} catch (erro) {
    console.log('Erro esperado:', erro.message);
}

// ---------- Abstração: a classe Animal não pode ser instanciada ----------
console.log('\n--- Abstração ---');
try {
    new Animal('Genérico', 1);
} catch (erro) {
    console.log('Erro esperado:', erro.message);
}

// ---------- Verificação de tipos ----------
console.log('\n--- Verificação de tipos ---');
console.log('typeof rex:', typeof rex);
console.log('typeof rex.nome:', typeof rex.nome);
console.log('rex instanceof Cachorro:', rex instanceof Cachorro);
console.log('rex instanceof Animal:', rex instanceof Animal);
console.log('rex instanceof Gato:', rex instanceof Gato);

// ---------- Objeto literal e função construtora (para comparar) ----------
console.log('\n--- Objeto literal e função construtora ---');
const tutor = { nome: 'Breno', animais: animais.length };
console.log(tutor);

function Casa(endereco) {
    this.endereco = endereco;
}
const casa = new Casa('Rua das Flores, 10');
console.log(casa, casa instanceof Casa);
