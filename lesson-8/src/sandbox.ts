let greet: Function;
// greet = 'hello'

greet = () => {
    console.log('Hello world');
};
greet();

const add = (a: number, b: number, c: number|string = 20) => {
    console.log(a + b);
    console.log(c);
};

add(5, 15);
add(3, 67, '2');

const minus = (a: number, b: number): number => {
    return a - b;
}

let result = minus(43, 6);
console.log(result);