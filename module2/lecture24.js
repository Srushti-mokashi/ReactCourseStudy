// ES6 Modules in javascript (Premium Style)

export const add = (a,b) => a+ b;
export const multiply = (a,b) => a+b;

export {add, multiply};

export default function greet(name) {
    return `Hello ${name}`
}