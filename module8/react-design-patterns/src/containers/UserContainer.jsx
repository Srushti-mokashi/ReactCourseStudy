import React, { useEffect } from 'react'

const UserContainer = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const getUsers = async () =>{
        setLoading(true);
        try{
      const response = await fetch('https:reqres.in/api/users', {
      headers: {
        'x-api-key': 'reqres-free-v1' 
      
      }   
    })
    const json = await response.json();
    console.log(json);
    if(!json.data) return;
    setUsers(json.data);
    setLoading(false);
   }catch(error){
    setError(error);
    console.log(error);
};
}
useEffect(() => {
    getUsers();
}, []);
  return (
    <div>
      
    </div>
  )
};

export default UserContainer
