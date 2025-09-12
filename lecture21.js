// Promises in JS


// syntax
// const myPromise = new Promise((resolve,reject)=>{
//     if(true){
//         resolve('')
//     }else{
//         reject('')
//     }
// })

// myPromise.then((result) =>{
//     console.log(result)
// }).catch(()=>{

// }).finally(()=>{

// })


// function orderFood(isRestaurantOpen){
//     return new Promise((resolve,reject) => {
//         console.log("Placing Order...");
//         setTimeout(() => {
//             if(isRestaurantOpen){
//                 resolve("Order Received");
//             }else{
//                 reject("Restaurant is closed");
//             }
//         },2000)
//     })
// }

// orderFood(true).then((res)=>{
//     console.log(res)
//     return 'Preparing Food.!!';
// }).then((res)=>{
//     console.log(res);
//     return 'Out of Deleivery'
// }).then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//   console.log('Error',error)
// }).finally(()=>{
//     console.log('Thank you for using our service')
// })



// fetch('https://isonplaceholder.typicode.com/todos/1').then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data)
// }).catch((error) =>{
//     console.log(error)
// })

// Promise.all() is a method that takes an array of promises and returns a new Promise that resolves when all of them are resolved,
//  or rejects if any one fails

// const fetchUser1 = fetch('https://isonplaceholder.typicode.com/todos/1').then(res => res.json());
// const fetchUser2 = fetch('https://isonplaceholder.typicode.com/todos/2').then(res => res.json());
// const fetchUser3 = fetch('https://isonplaceholder.typicode.com/todos/3').then(res => res.json());


// Promise.all([fetchUser1,fetchUser2,fetchUser3]).then((users)=>{
//     console.log('All users Loaded.!!',users)
//     users.forEach(user => console.log(user.name, user.email))
// }).catch((err) =>{
//     console.log('Error Fetching User Info',err)
// })
