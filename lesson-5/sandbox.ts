// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = 'Stan';
age = 26;

// isLoggedIn = 45;
isLoggedIn = false;

// arrays
    let ninjas: string[] = [];

ninjas.push('Naruto')

// union types
let mixed: (string|number|boolean)[] = [];
mixed.push('Hello');
mixed.push(23);
mixed.push(false);
console.log(mixed);

let uid: string|number;
uid = 123;
uid = '123';
// uid = false;

// objects
let ninja: object;
ninja = {
    name: 'Steve',
    age: 23,
    belt: 'green'
};
// ninja = []

let shinobi: {
    name: string,
    clan: string,
    age: number
};

shinobi = {
    name: 'toneri',
    clan: 'Otsusuki',
    age: 945
}
console.log(shinobi, ninja);