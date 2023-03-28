import { Invoice } from './modules/invoice.js'
import { Payment } from './modules/payment.js'
import { HasFormatter } from './interfaces/hasFormatter.js'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;


// docOne = new Invoice('James', 'Web routing', 5433);
// docTwo = new Payment('Mark', 'Web work', 5444);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// const invOne = new Invoice('Steven', 'Workshopping', 5000);
// const invTwo = new Invoice('Oyewale', 'Back-end work', 8000);

// console.log(invOne, invTwo, invOne.format());
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(new Invoice('Stan', 'Website', 7980));
// invoices.push(invTwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, ':', inv.format());
// });



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

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'payment'){
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc);
});