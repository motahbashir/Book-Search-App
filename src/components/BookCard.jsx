import React from 'react'

export default function BookCard({ books = [] }) {
  return (
    <div  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6"  >
{books.map((book)=>(
<div key={book.key}
 className="
  bg-gray-200 border border-gray-300
  rounded-lg p-4 flex flex-col gap-2
  transition
  hover:bg-gray-300
  hover:shadow-lg
  hover:-translate-y-1
  cursor-pointer
"



>

<h3   className="text-center font-semibold text-sm text-black"  >{book.title}</h3>

<p>{book.cover_i && (
 <img
  src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
  alt={book.title}
   className="w-full h-48 object-contain bg-light gray"
  loading="lazy"

/>
)}</p>
<p className="text-center font-semibold text-sm text-black" > publish year: { book.first_publish_year}  </p>
<p  className="text-center font-semibold text-sm text-black"   >Author name: {book.author_name} </p>
  </div>
))}

   
    </div>
  )
}
