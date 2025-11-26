const todos = [
    {id: 81, todo: "Organize dresser", completed: false, userId: 72 },
    {id: 81, todo: "Organize dresser", completed: false, userId: 72 },
    {id: 81, todo: "Organize dresser", completed: false, userId: 72 },
    {id: 81, todo: "Organize dresser", completed: false, userId: 72 },

];

const userMap = new Map();

todos.forEach((todo)=>{
    if(!userMap.has(todo.userId)){
        userMap.set(todo.userId,[]);
    }
    userMap.get(todo.userId).push(todo);
});

Array.from(userMap).map(([userId, todos]) =>{
    console.log(userId, todos);
});