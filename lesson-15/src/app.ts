// interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(b: number): number;
}

const me: IsPerson = {
    name: 'Mark',
    age: 27,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(`I spent ${amount}`);
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log(`Hello ${person.name}`);
}

greetPerson(me);

console.log(me);


import { Invoice } from './modules/invoice.js'


const invOne = new Invoice('Steven', 'Workshopping', 5000);
const invTwo = new Invoice('Oyewale', 'Back-end work', 8000);

// console.log(invOne, invTwo, invOne.format());
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(new Invoice('Stan', 'Website', 7980));
invoices.push(invTwo);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, ':', inv.format());
});



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

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});