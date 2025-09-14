// async and await are keywords in javascriot used to handle asynchronous operations ina cleaner and more readble way than apromises 

// async makes a function return a promise
// await pauses the function execution until the Promise is resolved or rejected

// syntax
// async function myFunction(){
//     try{
//     const result = await someAsyncTask();
//     console.log(result)
//    }catch(error){
//     console.log(error)
//    }
// }


async function fetchUserData(){
    console.log("Fetching user data!!")
    try{
        const response = await fetch('https://isonplaceholder.typicode.com/todos/1');
        const user = await response.json();
        console.log('User Loaded', user)
    }catch(error){
        console.log('Failed to fetched',error)
    }finally{
        console.log('Request Completed')
    }
}

fetchUserData();