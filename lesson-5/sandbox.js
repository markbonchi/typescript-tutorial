// explicit types
var character;
var age;
var isLoggedIn;
// age = 'Stan';
age = 26;
// isLoggedIn = 45;
isLoggedIn = false;
// arrays
var ninjas = [];
ninjas.push('Naruto');
// union types
var mixed = [];
mixed.push('Hello');
mixed.push(23);
mixed.push(false);
console.log(mixed);
var uid;
uid = 123;
uid = '123';
// uid = false;
// objects
var ninja;
ninja = {
    name: 'Steve',
    age: 23,
    belt: 'green'
};
// ninja = []
var shinobi;
shinobi = {
    name: 'toneri',
    clan: 'Otsusuki',
    age: 945
};
console.log(shinobi, ninja);
