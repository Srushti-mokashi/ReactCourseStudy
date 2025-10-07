import React, { useEffect, useState } from 'react'
import axios from "axios";
import Loader from '../common/Loader';

const Sellers = () => {
  useState [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const  [name, setName] = useState("");
  // useEffect(()=>{
  //   // document.title = `Name is ${name}`;
  //   console.log("Component Mount.!!");
  //   return () =>{
  //     console.log("Component Unmount.!!");
  //   }
  // }, [name]);
  
  useEffect(() =>{

    fetchUsers();
    // setIsLoading(true);
    // axios
    // .get("https://jsonplaceholder.typicode.com/users")
    // .then((res) => {
    //   setUsers(res.data);
    //   setIsLoading(false);
    //  })
    //  .catch((err) => {
    //   setErrors(err.message);
    //   setIsLoading(false);
    //  });
    
  },[]);

  const fetchUsers = async ()=>{
    try{
      setIsLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
      setIsLoading(false);
    }catch(err){
        setErrors(err.message);
        setIsLoading(false);
    
    } finally {
    console.log("All is good");
  }
};
   const addUser = ()=> {
       const newUser = {
        name,
        id: users.length + 1,
       };
       setUsers([newUser, ...users]);
       axios.post("https://jsonplaceholder.typicode.com/users", newUser)
        .then((res) =>{
           setUsers([res.data, ...users]);
          })
          .catch((err) => {
            setErrors(err.message)
            setUsers(users)
        
        });
      }
  return (
    <>
       <h3>Admin Sellers Page</h3>
       <input type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}

              />
              <button onClick={addUser}>Add user</button>
              {isLoading && <Loader />}
              {errors && <em>{errors}</em>}
              {users.map((user) => (
                <p key={user.id}>{user.name}</p>
              ))}
    </>
  

  );
};

export default Sellers;
