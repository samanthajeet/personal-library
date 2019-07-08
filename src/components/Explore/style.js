import styled from 'styled-components';

export const ExplorePage = styled.main`
* {
  box-sizing: border-box;
}
  background: #F9F9F9;
  height: 92vh;
  display: flex;
  flex-direction: column ;
  align-items: center;



`

export const ExploreUpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img{
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`
export const MappedBooks = styled.div`
  /* height: 100%; */
  display: flex;
  flex-wrap: wrap;
`

export const SubmitForm = styled.form`
      /* border: 1px solid orange; */
      position: absolute;
      width: 75%;
      height: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      h2{
        margin: 0;
        color: white;
        font-size: 3rem;
        text-shadow: 3px 3px #ff8d00;
      }
    input{
    /* border: 1px solid red; */
    width: 70%;
    height: 20%;
    background: white;
    outline: none;
    font-size: 4rem;
    padding: 1rem;
    border: none;
    animation: extend 2s;
    }
    input:focus{
      outline: none;
    }


    @keyframes extend {
  0%   { width: 0; }
  100% { width: 70%; }
}


`