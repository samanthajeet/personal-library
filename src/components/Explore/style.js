import styled from 'styled-components';

export const ExplorePage = styled.main`
  background: #F9F9F9;
  height: 92vh;
  display: flex;
  flex-direction: column ;
  align-items: center;

`
export const MappedBooks = styled.div`
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
`

export const SubmitForm = styled.form`
      border: 1px solid orange;
      width: 75%;
      height: 20%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    input{
    /* border: 1px solid red; */
    width: 70%;
    height: 50%;
    background: white;
    outline: none;
    font-size: 4.5rem;
    padding: .5rem;
    border: none;
    }
    input:focus{
      outline: none;
    }

`