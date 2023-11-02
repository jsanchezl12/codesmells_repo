function sumar(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return NaN;
    }
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function resta1(a, b) {
    return a - b;
}

function resta2(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return NaN;
    }
    return a / b;
}

function add(numbers) {
    var result = 0;
    var parts = numbers.split(',');
    for (var i = 0; i < parts.length; i++) {
        var integer = parseInt(parts[i]);
        if (!isNaN(integer)) {
            if (integer >= 0) {
                if (integer <= 1000) {
                    result += integer;
                }
            }
        }
    }

    return result;
}

function test() {
    let a = "start";
    let b;
    for (let i = 0; i < 5; i++) {
        b += a[i].toUpperCase();
    }
}

function test_2() {
    var color = "blue";
    var size = 4;
    i = 1;
    let array = [1, 2, 3];

    for (j = 0; j < array.length; j++) {
        i = i * array[j];
    }

    param = 1;

    switch (param) {
        case 0:
            console.log("doSomething");
            break;
        default:
            error();
            break;
        case 1:
            console.log("doSomethingElse");
            break;
    }
}

function getIP() {
    var ip = "192.168.12.42";
    let j = 0;
    while (true) {
        j++;
    }
    return ip;
}

function foo(param) {
    if (param && param.value) {
        bar(param.value);
    }
}

function test_3() {
    const pattern1 = /\x1a/;
    const pattern2 = new RegExp('\x1a');
}

function test_4() {
    const myMap = new Map();
    const mySet = new Set();
    const fruits = ["apple", "banana", "cherry"];
    fruits[1] = "banana";
    fruits[1] = "apple";

    myMap.set("key", 1);
    myMap.set("key", 2);

    mySet.add(1);
    mySet.add(1);
}

module.exports = { sumar, resta, multiplicar, dividir, add, test, test_2, foo, test_3, getIP, test_4};
