import { HasFormatter } from '../interfaces/hasFormatter.js'

// classes
export class Payment implements HasFormatter {
    // readonly recipient: string;
    // private details: string;
    // public amount: number;

    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
};

// export default Invoice;