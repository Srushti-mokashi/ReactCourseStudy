// L-9 Optional Chaining(?.) & Nullish Coalescing (??) Logical OR (||) in Javascript

// const User = {
//     name: "Neha",
//     address:{
//         city:"Nangnur",
//         pincode:416551
//     },
//     preferences: null
// };

// // const city = User.address.city;
// // console.log(city); //if there adress is available

// const city =User.address?.city; //it will not give error if the address is not there it will give undefined 
// console.log(city);

// console.log(User.getData?.());

// Nullish Coalescing(??)

// const User2 ={
//     name:"Neha",
//     preferences: null,
//     getData:function(){
//         return this.name
//     }
// };


// const prefs= User2.preferences ?? 'No Preference Set'; //used when the case is null or undefined
// console.log(prefs);

// OR Operator
const quantity =0;
const result =quantity || 10;
console.log(result);