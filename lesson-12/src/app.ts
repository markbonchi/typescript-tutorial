// const anchor = document.querySelector('a')!;

// // if (anchor){
// //     console.log(anchor.href);
// // }

// console.log(anchor.href);

// classes

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount =a;
    }

    format(){
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
};

const invOne = new Invoice('Steven', 'Workshopping', 5000);
const invTwo = new Invoice('Oyewale', 'Back-end work', 8000);

// console.log(invOne, invTwo, invOne.format());
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(new Invoice('Stan', 'Website', 7980));
invoices.push(invTwo);
console.log(invoices);



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