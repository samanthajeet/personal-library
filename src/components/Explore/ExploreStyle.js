import styled from "styled-components";

export const ExplorePage = styled.main`
  * {
    box-sizing: border-box;
  }
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const ExploreUpper = styled.div`
  background: url("https://images.unsplash.com/photo-1514894780887-121968d00567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  height: 40rem;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubmitForm = styled.form`
  /* border: 1px solid orange; */
  /* position: absolute; */
  width: 75%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin: 0;
    color: white;
    font-size: 3rem;
    text-shadow: 3px 3px #ff8d00;
  }
  input {
    /* border: 1px solid red; */
    width: 80%;
    height: 20%;
    background: white;
    outline: none;
    font-size: 4rem;
    padding: 1rem;
    border: none;
    animation: extend 2s;
    font-family: "Nunito", sans-serif;
  }
  input:focus {
    outline: none;
  }

  @keyframes extend {
    0% {
      width: 0;
    }
    100% {
      width: 80%;
    }
  }
`;

export const MappedBooks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
