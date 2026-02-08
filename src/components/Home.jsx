import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import Search from './Search'
import Categories from './Categories'


function Home() {

const[books, setBooks]=useState([])
const [query, setQuery] = useState("book")
const[loading, setLoading]= useState(false)
    

const fetchData = async ()=>{

 setLoading(true);

  const response=  await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)


 const data= await response.json()



console.log(data.docs.slice(0,30))

setBooks(data.docs.slice(0,30))


 setLoading(false);

}

useEffect (()=>{
  fetchData()



},  [query])




  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-red-600">

{loading && books.length === 0 && (
  <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/70 z-50">
    
    <div className="text-6xl animate-spin mb-6">
      ⏳
    </div>

    <h2 className="text-white text-2xl font-semibold tracking-wide">
      Please wait, loading...
    </h2>

  </div>
)}


{!loading && books.length === 0 && (
  <div className="fixed inset-0 flex flex-col items-center justify-center text-center">
    
    <div className="text-6xl mb-4">
      🙌
    </div>

    <h2 className="text-white text-2xl font-semibold">
      Sorry, we could not find that book.
    </h2>

  </div>
)}


      <Search onSearch={(text) => setQuery(text.trim() || "book")} />
        <Categories query={query} setQuery={setQuery} />
 <BookCard books={books} />


    </div>
  )

}
export default Home;