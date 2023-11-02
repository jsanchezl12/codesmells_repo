const { expect } = require("chai");
const { sumar, resta, multiplicar, dividir } = require("../src/index");

describe("Calculadora", function () {
    
    it("debería lanzar un error al dividir por cero", function () {
        expect(() => dividir(5, 0)).to.throw("Division by zero"); // Code Smell: No se manejan errores correctamente
    });

});
