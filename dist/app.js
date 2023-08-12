"use strict";
const userName = 'Max';
let age = 30;
age = 29;
const add = (a, b) => a + b;
console.log(add(5, 2));
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
printOutput(add(5, 2));
//# sourceMappingURL=app.js.map