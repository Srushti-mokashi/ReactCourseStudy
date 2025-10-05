import React, { useEffect, useState } from 'react'
import axios from "axios";

const Sellers = () => {
  useState [users, setUsers] = useState([]);
  // const  [name, setName] = useState("");
  // useEffect(()=>{
  //   // document.title = `Name is ${name}`;
  //   console.log("Component Mount.!!");
  //   return () =>{
  //     console.log("Component Unmount.!!");
  //   }
  // }, [name]);
  
  useEffect(() =>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      setUsers(res.data);
    });
    //  fetch("https://jsonplaceholder.typicode.com/users")
    //  .then((res) => res.json())
    //  .then((data) => console.log(data)).catch((error)=>{})
  },[])
  return (
    <>
       <h3>Admin Sellers Page</h3>
       <input type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}

              />
              {users.map((user) => (
                <p key={user.id}>{user.name}</p>
              ))}
    </>
  

  );
};

export default Sellers;
