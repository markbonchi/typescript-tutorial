"use strict";
let greet;
// greet = 'hello'
greet = () => {
    console.log('Hello world');
};
greet();
const add = (a, b, c = 20) => {
    console.log(a + b);
    console.log(c);
};
add(5, 15);
add(3, 67, '2');
const minus = (a, b) => {
    return a - b;
};
let result = minus(43, 6);
console.log(result);
