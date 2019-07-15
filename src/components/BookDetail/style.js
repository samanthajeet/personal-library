import styled from 'styled-components';


export const BookDetailPage = styled.main`
  * {
    margin: 0;
    height: 100%
  }
`;
export const Loading = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 15rem;

`

export const BookImageHeader = styled.div`
  /* border: 1px solid green; */
  height: 15rem;
  overflow:hidden;
  /* width: 100%; */

  /* background: linear-gradient(red, orange); */

  img {
    object-fit: cover;
    object-position: 0 -12rem;
    width: 100%;
    height: 100%;
    filter: blur(.3rem);
    -webkit-filter: blur(.3rem);
    overflow-x: hidden;

  }

  .header-book-info {
    /* border: 1px solid white; */
    background: white;
    position: absolute;
    top: 15%;
    left: 20%;
    /* transform: translate(-50%, -50%); */
    color: black;
    /* width: 70%; */
    height: auto;
    text-align: left;
    padding: 0.25rem;
    width: 50%;
    /* border: 1px solid blue; */

    h1 {
      font-size: 2.5rem;
    }
  }
`;

export const BookDetailBody = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  padding: 1rem;

  .box-dropsh {
    box-shadow: 1px 1px 2px 1px #e6e6e6;
    background: white;
  }

  .left-panel {
    /* border: 1px solid red; */
    width: 15%;
    height: 20rem;

    .book-detail-cover {
      /* border: 1px solid lightblue; */
      height: 90%;
      width: 100%;

      img {
        object-fit: cover;
        width: 100%;
        /* height: 100% */
      }
    }
  }


  .center-panel {
    /* border: 1px solid red; */
    width: 34%;
    margin-left: 1rem;
    margin-right: 1rem;
    p{
      font-size: .9rem;
    }
  }

  .book-info{
    padding: 1rem;

    
  }


  .book-info-header{
    /* border: 1px solid orange; */
    display: flex;
    justify-content: space-between;
  }

  .right-panel {
    border: 1px solid red;
    width: 15%;
    height: 10rem;
  }
`;