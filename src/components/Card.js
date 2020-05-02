import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: teal;
  font-size: 1.2em;
`;
const Paragraf = styled.p`
  color: black;
  font-size: 20px;
  margin: 40px 0;
  display: none;
`;

const Box = styled.article`
  width: 300px;
  border: 1px solid black;

  &:hover ${Title} {
    display: none;
  }

  &:hover ${Paragraf} {
    display: block;
  }
`;

export const Card = ({object}) => {
 
  return (
    <Box>
      <Title>{object.title}</Title>
      <Paragraf>{object.authors}</Paragraf>
    </Box>
  );
};