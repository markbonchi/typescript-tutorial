import { Invoice } from './modules/invoice.js'
import { Payment } from './modules/payment.js'
import { HasFormatter } from './interfaces/hasFormatter.js'
import { ListTemplate } from './modules/listTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// input
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
// console.log(type);
// console.log(toFrom);
// console.log(details);
// console.log(amount);

// list template
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'payment'){
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
});

// Generics

const addUid = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 0x10f0);
    return {...obj, uid};
}

let docOne = addUid({name: 'Juan', age: 40});
// let doctwo = addUid('Stan')
console.log(docOne.name, docOne.age);

interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: {name: 'Stef'}
}

const docFour: Resource<string[]> = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['carrot', 'milk', 'spice', 'coco']
}

console.log(docFour, docThree);

