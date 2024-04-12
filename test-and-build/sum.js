// Common JS modules
exports.sum = (a, b) => {

// ES6 modules
//export const sum = (a, b) => {
    return a + b;
}


exports.factorial = (n) => {
//export const factorial = (n) => {    
    let r = 1;
    for (let i=2; i <= n; i++)
        r *= i;
    return r;
}
