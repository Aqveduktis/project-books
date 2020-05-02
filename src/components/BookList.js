import React, { useState, useEffect } from 'react'

export const BookList = () => {
const [books, setBooks] = useState([])
useEffect(()=>{
fetch('https://express-books-aqv.herokuapp.com/books')
  .then(response => response.json())
  .then(data => setBooks(data));

},[])
  return(
    <section>
    hello world
    {books && 
      books.map((item)=>(<p>{item.title}</p>))
    }
    </section>
  )
}