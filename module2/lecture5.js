// Arrow Function vs Normal Function - Deep Dive into 'this' keyword Behavior

// function greet(){
//     console.log("Hello Ajay!!");
// }
// greet();
// greet();


// Arrow function

// const greet = ()=>{
//     console.log("hello neha!!");
// }
// greet();

// const abc=()=>'ajay suneja';
// const text = abc();
// console.log(text);



// Use of this keyword


// name='Vikas';
// const user ={
//     name: 'Ajay',
//     sayHi: function(){
//         console.log("Hey",this.name)
//     }
// }

// user.sayHi();

// const user1 = {
//     name:'Ajay',
//     sayHi:()=>{

//         console.log("Hey", name)
//     }

// }
// user1.sayHi();