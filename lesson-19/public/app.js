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
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["PERSON"] = 0] = "PERSON";
    ResourceType[ResourceType["BOOK"] = 1] = "BOOK";
    ResourceType[ResourceType["PLACE"] = 2] = "PLACE";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["STORE"] = 4] = "STORE";
})(ResourceType || (ResourceType = {}));
;
const docOne = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: { name: 'Stef' }
};
const docTwo = {
    uid: 30,
    resourceType: ResourceType.BOOK,
    data: { title: 'strangers\' door' }
};
console.log(docOne, docTwo);
