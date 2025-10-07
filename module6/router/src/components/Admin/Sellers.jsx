import React, { useEffect, useState } from 'react'
import apiClient from '../../utils/api-client';
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
      const res = await apiClient.get();
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
       apiClient
        .post("/users", newUser)
        .then((res) =>{
           setUsers([res.data, ...users]);
          })
          .catch((err) => {
            setErrors(err.message)
            setUsers(users)
        
        });
      } 
      
      const deleteUser=(id)=>{
        setUsers(users.filter((user) => user.id !== id));
        apiClient
          .delete("/users/${id}")
          .catch((err) => {
            setErrors(err.message);
            setUsers(users);
          });
      };
      const UpdateUser = (user) => {
        const updateUser = {
        ...user,
        name: user.name + "  Updated",
      };
      setUsers(user.map((u) => (u.id === user.id ? updateUser : u)));
      apiClient.patch(
        "/users/${user.id}",
        updateUser
      )
      .catch((err) => {
        setErrors(err.message);
        setUsers(users);
      });
    };
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
              <table>
                <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>
                        {" "}
                              <p key={user.id}>{user.name}</p>
                        </td>
                        <td>
                            <button onClick={()=>{ Update(user);

                            }}
                                >Delete

                            </button>
                        </td>
                               
                      </tr>
                     
              ))}
                </tbody>
              </table>
              
    </>
  

  );
};

export default Sellers;
