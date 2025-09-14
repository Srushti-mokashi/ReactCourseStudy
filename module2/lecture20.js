// Event Delegation and Event Bubbling

document.getElementById("grandparent").addEventListener('click', () =>{
    console.log("grandparent clicked");
});

document.getElementById("parent").addEventListener('click', () =>{
    console.log("parent clicked");
});

document.getElementById("child").addEventListener('click', () =>{
    console.log("child clicked");
});


// used for stoping grandparent and parent when clicked

// document.getElementById("child").addEventListener('click', (e) =>{
    // e.stopPropagation();                          
//     console.log("child clicked");
// });

const menu = document.getElementById('menu');
menu.addEventListener('click',function(e){
    if(e.target.tagName ==='LI'){
       console.log('Clicked',e.target.textContent);
    }
});