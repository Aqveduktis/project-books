import React from 'react'
import { BookList } from 'components/BookList'
import { Header } from 'components/Header'
import './styles/style.css'


export const App = () => {
  return (
    <div>
      <Header />
      <BookList />
    </div>
   
  )
}
