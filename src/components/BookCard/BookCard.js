import React from 'react';
import styled from 'styled-components';

const Book = styled.div `
/* border: 1px solid blue; */
width: 25vh;
margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;


  #book-cover{
    /* border: 2px solid red; */
    height: 35vh;
    width: 100%;

    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  h3{
    margin: 0;
    font-size: .85rem;
    margin-top: .4rem;
    margin-bottom: .4rem;
  }

  h6{
    margin: 0;
    color: darkgray;
    font-size: .66rem;
  }

  :hover{
    cursor: pointer;
  }

`


function BookCard(props){

  return (
    <Book>
      <div id="book-cover">
        <img src={props.cover} alt='book cover'/>
      </div>
      <h3>{props.title}</h3>
      <h6>- {props.author}</h6>
    </Book>
  )
}

export default BookCard;