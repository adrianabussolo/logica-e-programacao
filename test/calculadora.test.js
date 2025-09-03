const { somarDoisNumeros } = require('../src/calculadora'); // importação da função
const { expect } = require('chai');


describe('Testes da Função de Soma', function() {
    it('A função deve ser capaz de somas dois numeros positivos')
    // Coleta o resultado da função
    const resultadoDaSoma = somarDoisNumeros(5,3);

    // Compara o resultado com o valor que você espera
    expect(resultadoDaSoma).to.equal(8);
});

    it('A função deve ser capaz de somar numero positivo e um negativo', function() {
     // Coleta o resultado da função 
     const resultadoDaSoma = somarDoisNumeros(50,-15);

     // Compara o resultado com o valor que você espera
     expect(resultadoDaSoma).to.equal(35);
});