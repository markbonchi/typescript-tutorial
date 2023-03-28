"use strict";
// const anchor = document.querySelector('a')!;
// // if (anchor){
// //     console.log(anchor.href);
// // }
// console.log(anchor.href);
// classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
;
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
