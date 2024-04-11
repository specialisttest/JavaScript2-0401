import {mortgage, overpayment} from './mymodule.mjs'

console.log('Hello Node.js')
console.log(new Date().toLocaleTimeString())
//console.log(process.argv)

//let [,,S,p,n] = process.argv;

let S = parseFloat(process.argv[2]);
let p = parseFloat(process.argv[3]);
let n = parseInt(process.argv[4]);

const mortgageValue = mortgage(S, p, n);
const overpaymentValue = overpayment(S, p, n);

console.log( `Платеж в месяц: ${mortgageValue.toFixed(2)}`);
console.log(`Переплата: ${overpaymentValue.toFixed(2)}`);