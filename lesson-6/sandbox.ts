let age: any = 25;
console.log(age);
age = false;
console.log(age);
age = 'Mark';
console.log(age);
age = {
    name: 'Mark',
    present: true
};
console.log(age);

let mixed: any[] = [];
mixed.push(34);
mixed.push('Stan');
mixed.push(false);
console.log(mixed);

let ninja: { name: any, age: any, skills: any[]};

ninja = {
    name: 'Tako',
    age: 45,
    skills: [7, true, 'Parkor']
};
console.log(ninja);

ninja = {
    name: 54,
    age: 'Tako',
    skills: [7, true, 'Parkor']
};
console.log(ninja);
