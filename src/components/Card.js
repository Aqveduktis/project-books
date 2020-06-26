import React from "react";


export const Card = ({object}) => {
 
  return (
    <article className="bookCard">
    <p>{object.title}</p>
    <p>{object.authors}</p>
    <p>{object.isbn}</p>
    </article>
  );
};