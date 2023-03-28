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
    let values;
    values = [
        toFrom.value,
        details.value,
        amount.valueAsNumber
    ];
    let doc;
    if (type.value === 'payment') {
        doc = new Payment(...values);
    }
    else {
        doc = new Invoice(...values);
    }
    list.render(doc, type.value, 'end');
});
// Tuples
let arr = [4, 55, false, 'people'];
arr[0] = 3;
arr[1] = true;
arr[2] = 'string';
console.log(arr);
let tup = ['Stan', 87, true];
tup[0] = 'Tony';
tup[1] = 46;
tup[2] = false;
console.log(tup);
let student = ['steph', 345334];
student[0] = 'Jody';
student[1] = 443254;
console.log(student);
