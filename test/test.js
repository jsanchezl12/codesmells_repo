const { expect } = require("chai");
const { sumar, resta, multiplicar, dividir, add } = require("../src/index");

describe("Calculadora", function () {
    
    it("debería sumar dos números correctamente", function () {
        expect(sumar(5, 3)).to.equal(8);
    });

    it("debería restar dos números correctamente", function () {
        expect(resta(10, 3)).to.equal(7);
    });

    it("debería multiplicar dos números correctamente", function () {
        expect(multiplicar(4, 5)).to.equal(20);
    });

    it("debería lanzar un error al dividir por cero", function () {
        expect(() => dividir(5, 0)).to.throw("Division by zero");
    });

    it("debería sumar números en una cadena separados por comas", function () {
        expect(add("1,2,3,4,5")).to.equal(15);
    });

    it("debería manejar números mayores que 1000 en la suma", function () {
        expect(add("1000,1001,2000,3000")).to.equal(1000);
    });

    it("debería manejar cadenas vacías en la suma", function () {
        expect(add("")).to.equal(0);
    });

    it("debería manejar una cadena con un solo número en la suma", function () {
        expect(add("42")).to.equal(42);
    });

    it("debería manejar números negativos en la suma", function () {
        expect(add("-1,2,3,-4,5")).to.equal(5);
    });
});
