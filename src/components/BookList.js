import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card } from './Card';

const Section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`


export const BookList = () => {
const [books, setBooks] = useState([])
useEffect( ()=>{
fetch('https://express-books-aqv.herokuapp.com/books')
.then(res=>res.json())
.then(json => setBooks(json.books))


},[])
console.log(books)
  return(
    <section className="container">
    {books.length && 
      books.map((item)=>(<Card object={item} />))
    }
    </section>
  )
}
// const response = await fetch('https://express-books-aqv.herokuapp.com/books');
// const data = await response.json();
// console.log(data)
// setBooks(data.books)