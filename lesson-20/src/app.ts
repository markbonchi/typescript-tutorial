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

    let values: [string, string, number];
    values = [
        toFrom.value,
        details.value,
        amount.valueAsNumber
    ];

    let doc: HasFormatter;
    if (type.value === 'payment'){
        doc = new Payment(...values);
    } else {
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

let tup: [string, number, boolean] = ['Stan', 87, true];
tup[0] = 'Tony';
tup[1] = 46;
tup[2] = false;
console.log(tup);

let student: [string, number] = ['steph', 345334];
student[0] = 'Jody';
student[1] = 443254;
console.log(student);