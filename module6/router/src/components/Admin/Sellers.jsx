import React, { useEffect } from 'react'

const Sellers = () => {
  const  [name, setName] = useState("");
  useEffect(()=>{
    document.title = `Name is ${name}`;
    console.log("Component Mount.!!");
  }, [name]);
  
  return (
    <>
       <h3>Admin Sellers Page</h3>
       <input type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}/>
    </>
  

  );
};

export default Sellers;
