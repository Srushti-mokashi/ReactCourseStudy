import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const category = searchParams.get("category");
  const sortByViews = searchParams.get("sortByViews");

  const handleSortBy = () => {
    setSearchParams({
      sortByViews: "Views",
      category: "electronics",
    });
  };
  return (
    <div>
      <h2>Articles
         <p>SortBy:{sortBy ?? sortByViews} Category:{category}
         </p>
         </h2>
         <button onClick={handleSortBy}>sort By Views</button>
    </div>
  )
}

export default Articles
