function sumar(a, b) {
    return a + b; // Bug: falta una validación para comprobar si a y b son números
}

function resta(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b; // Code Smell: no se manejan errores de división por cero
}

module.exports = { sumar, resta, multiplicar, dividir };
