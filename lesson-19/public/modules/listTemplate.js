/**
 * 1. render a list container (ul) in the construct
 * 2. create a render method to render a new 'li' to the container
 *  --accept arguments: invoice or payment, a heading, a position
 *  --create new html templates (li, h4, p)
 *  --add 'li' template to the start/end of the list
 */
export class ListTemplate {
    container;
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
