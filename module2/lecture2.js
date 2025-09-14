// first syncronus code executes after that asynchronus



// console.log("Start")
// setTimeout(() =>{
//     console.log("setTimeout callback")
// }, 4000);

// Promise.resolve().then(() =>{
//     console.log("Promise callback")
// })

// console.log("end");


function f1(){
    console.log("F1")
}

function f2(){
    f1();
    console.log("F2")
}

f2();