import { Invoice } from './modules/invoice.js';
import { Payment } from './modules/payment.js';
import { ListTemplate } from './modules/listTemplate.js';
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// input
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// console.log(type);
// console.log(toFrom);
// console.log(details);
// console.log(amount);
// list template
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'payment') {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Generics
const addUid = (obj) => {
    let uid = Math.floor(Math.random() * 0x10f0);
    return { ...obj, uid };
};
let docOne = addUid({ name: 'Juan', age: 40 });
// let doctwo = addUid('Stan')
console.log(docOne.name, docOne.age);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'Stef' }
};
const docFour = {
    uid: 2,
    resourceName: 'shopping list',
    data: ['carrot', 'milk', 'spice', 'coco']
};
console.log(docFour, docThree);
