import React, { useEffect, useState} from "react";
import axios from "axios";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    useEffect(()=>{
      const fetchData = async () => {
        try{
           let url = "https://dummyjson.com/products";
           if (query.trim() !== ""){
            url = `https://dummy.json.com/products/search?q=${query}`;
           }
           const res = await axios.get(url);
           setResults(res.data.products);
        } catch (error) {
            console.error("Error Fetching Data", error);
        }
           
      };
      fetchData();
    }, [query]);

  return (
    <div>
      <h2>Product Search Bar</h2>
      <input type="text" value={query} placeholder="Type to search" 
        onChange={(e)=> {
            setQuery(e.target.value);
        }} />
      <ul>
        {results.length > 0 ? (
            results.map((item)=> (
                <li key={item.id}>
                    <strong>{item.title}</strong> ${item.price}
                </li>
            ))
        ):(
             <p>No Product Found</p>
        )}
      </ul>
    </div>
  )
}

export default SearchBar
