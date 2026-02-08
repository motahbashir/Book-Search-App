import React, { useEffect, useState } from 'react'



export default function Search({onSearch}) {

    const [searchQuery, setSearchQuery]=useState("")

const handlesearch =(e)=>{

e.preventDefault()
onSearch(searchQuery)

}

  return (
    <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-black to-red-900"        >

<form  onSubmit={handlesearch}
className="max-w-3xl mx-auto flex items-center gap-2 p-4"

>
<input 
type='text'  
onChange={(e)=>setSearchQuery(e.target.value)}  
  placeholder='Serach Your book...'
   value={searchQuery}
 
 className="
    flex-1
    px-4 py-2
    bg-gray-200 text-black
    border border-gray-300
    rounded-lg
    placeholder-gray-500
    focus:outline-none
    focus:ring-2 focus:ring-red-700
    focus:border-red-700
  "


 />

    <button type='submit'
    
    className="
    px-4 py-2
    bg-red-600 text-white
    rounded-lg
    font-semibold
    hover:bg-rose-900 
    active:bg-rose-700 

    transition
  "
    
    
    
    
    >Search </button>
</form>

      
    </div>
  )
}
