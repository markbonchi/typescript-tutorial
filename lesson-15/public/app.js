const me = {
    name: 'Mark',
    age: 27,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
greetPerson(me);
console.log(me);
import { Invoice } from './modules/invoice.js';
const invOne = new Invoice('Steven', 'Workshopping', 5000);
const invTwo = new Invoice('Oyewale', 'Back-end work', 8000);
// console.log(invOne, invTwo, invOne.format());
let invoices = [];
invoices.push(invOne);
invoices.push(new Invoice('Stan', 'Website', 7980));
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, ':', inv.format());
});
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
