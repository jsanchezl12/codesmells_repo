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
    let result = 0;
    let parts = numbers.split(',');
    for (let i = 0; i < parts.length; i++) {
        let integer = parseInt(parts[i]);
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
    let color = "blue";
    let size = 4;
    i = 1;
    let array = [1, 2, 3];

    for (let j = 0; j < array.length; j++) {
        i = i * array[j];
    }

    let param = 1;

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
    let ip = process.env.IP_ADDRESS;
    let j = 0;
    while (true) {
        j++;
        if (j < 5) {
            break;
        }
    }
    return ip;
}

function foo(param) {
    if (param && param.value) {
        bar(param.value);
    }
}

function test_3() {
    const pattern1 = /\x20/;
    const pattern2 = new RegExp('\x20');
    return [pattern1, pattern2];
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
