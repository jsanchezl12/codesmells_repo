const { expect } = require("chai");
const { sumar, resta, multiplicar, dividir, add, raiz, elevadoal2 } = require("../src/index");

describe("Calculadora", function () {
    
    it("debería sumar dos números correctamente", function () {
        expect(sumar(5, 3)).to.equal(8);
    });
    it("debería sumar dos strings", function () {
        expect(sumar("a","b")).to.NaN;
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
        expect(add("-1,2,3,-4,5")).to.equal(10);
    });

    it("debería calcular la raíz cuadrada de la diferencia entre dos números", function () {
        expect(raiz(9, 4)).to.equal(2.23606797749979);
        expect(raiz(16, 9)).to.equal(2.6457513110645907);
        expect(raiz(25, 0)).to.equal(5);
    });

    it("debería elevar el resultado de la resta al cuadrado", function () {
        expect(elevadoal2(5, 3)).to.equal(4);
        expect(elevadoal2(10, 3)).to.equal(49);
        expect(elevadoal2(2, 5)).to.equal(9);
    });
});
