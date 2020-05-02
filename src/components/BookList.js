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
useEffect(()=>{
fetch('https://express-books-aqv.herokuapp.com/books')
  .then(response => response.json())
  .then(data => setBooks(data));

},[])
  return(
    <Section>
    {books && 
      books.map((item)=>(<Card object={item} />))
    }
    </Section>
  )
}