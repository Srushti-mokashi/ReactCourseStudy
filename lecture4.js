// Var and let and const

// in var value can reasigned 

// var a= 20;
// var a= 30;

// console.log(a);

// // value can reassigned

// var a=30;
// a=40;

// console.log(a);


// Let 

// in case of let value  redeclaration is not possible ressigned possible
// it gives syntax error
// let a=30;
// let a=40;
// console.log(a);


// let a=40;
// a=45;
// console.log(a);


// in case of const value  redeclaration and ressigned not possible


// function scope

// var only accessible in function in case of var 
// function varExample(){
//     if(true){
//         var x= 10;
//     }

//     console.log(x)
// }
// varExample();



// block scope 
//  accessible in function not outside it 

// function letExample(){
//     if(true){
//         let a= 20;
//         console.log(a);
//     }
//     letExample();
// }

// for (var i=1; i<=3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

// for (var i=1; i<=3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }