import React, { useState } from 'react'


export default function Categories({query, setQuery}) {


console.log("Categories props:", { query, setQuery })

  return (
    <div   div className="fixed top-4 right-4 z-50" >
   




      <label htmlFor="category"  className="text-sm text-white whitespace-nowrap"  >  Categories </label>
       <select
        id="category"
        value={query}
        onChange={(e) => setQuery(e.target.value)}



 className="
          px-3 py-2
          bg-gray-200 text-black
          border border-gray-300
          rounded-lg text-sm
          focus:outline-none
          focus:ring-2 focus:ring-red-700
          focus:border-red-700
        "
      


      >
        <option value="book">All </option>
        <option value="fiction">Fiction</option>
        <option value="history">History</option>
        <option value="science">Science</option>
        <option value="romance">Romance</option>
      </select>
    </div>
  )
}
