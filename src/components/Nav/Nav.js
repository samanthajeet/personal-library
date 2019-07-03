import React from "react";
import styled from "styled-components";

const Navigation = styled.div`
  /* border: 1px solid blue; */
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  h1{
    color: #DC7822
  }
  `;

const Buttons = styled.div`
  /* border: 1px solid green; */
  width: 20%;
  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;
    font-size: 1rem;
    outline: none;
  }

  button:hover{
    color: #DC7822
  }

`;

function Nav(props) {
  return (
    <Navigation>
      <h1>decentReads</h1>
      <Buttons>
        <button onClick={() => props.history.push('/')} >home</button>
        <button onClick={()=> props.history.push('/explore')}>explore</button>
        <button onClick={()=> props.history.push('/profile')}>your shelf</button>
      </Buttons>
    </Navigation>
  );
}

export default Nav;
