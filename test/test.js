const { expect } = require("chai");
const { sumar, resta, multiplicar, dividir } = require("../src/index");

describe("Calculadora", function () {
    it("debería sumar dos números correctamente", function () {
        expect(sumar(2, 3)).to.equal(5);
    });

    it("debería restar dos números correctamente", function () {
        expect(resta(5, 2)).to.equal(3);
    });

    it("debería multiplicar dos números correctamente", function () {
        expect(multiplicar(4, 7)).to.equal(28);
    });

    it("debería dividir dos números correctamente", function () {
        expect(dividir(10, 2)).to.equal(5);
    });


    it("debería lanzar un error al dividir por cero", function () {
        expect(() => dividir(5, 0)).to.throw("Division by zero"); // Code Smell: No se manejan errores correctamente
    });

});
