// Js Hoisting

// Example 1: Var Hoisting

//  gives undefined 
// console.log(a)
// var a= 10;
// console.log(a);

//  Example 2: Let Hoisting

//  gets reference error: cannot access without initialization
// try{
//     console.log(b);

// }catch(e){
//     console.error(e);
// }
// let b = 20;
// console.log(b);


// Example 3: function Hoisting
// greet();
// function greet(){
//     console.log("Hello everyone");
// }


// Example 4: function expression Hoisting


// try{
//     heyFun();
// }catch(e){
//     console.error(e)
// }
// var heyFun = function(){
//     console.log("heyFun!!")
// }