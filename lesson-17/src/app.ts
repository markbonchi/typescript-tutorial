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