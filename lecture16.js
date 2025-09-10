// Ternary operator 

// Condition  ? '' : '';

const age = 28;
const status = age<= 18 ? 'Adult' : 'minor';
console.log(status);

const input = "" || "Default value"
console.log(input);

// Short-Circuiting

const isLoggedIn = true;
isLoggedIn && console.log("Welcome back");