import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BookCard from '../BookCard/BookCard'


const ExplorePage = styled.main`
  background: #F9F9F9;
  height: 100%;
`
const MappedBooks = styled.div`
  display: flex;
  flex-wrap: wrap;
`


class Explore extends Component {
  state = { 
    userInput: 'harry potter',
    bookSearchResults: []
   }


   handleOnChange(prop,val){
     this.setState({[prop]:val })
    }

    searchBooks(){
      const GoogleBooksApi = process.env.REACT_APP_GOOGLEBOOKS;

      axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${
          this.state.userInput
        }&key=${GoogleBooksApi}`
      )
      .then(response => {
        if(response.data.items){
          this.setState({ bookSearchResults: response.data.items }) ;
          console.log(this.state.bookSearchResults[0])
        }
      });

    }

    goToDetail(id){
      this.props.history.push(`/bookdetail/${id}`)
    }
    
    render() { 

      let mappedBooks = this.state.bookSearchResults.map( book => {
        return(
          <div key={book.id} onClick={() => this.goToDetail(book.id)} >
            <BookCard
              title={book.volumeInfo.title}
              cover={book.volumeInfo.imageLinks.thumbnail}
              author={book.volumeInfo.authors[0]}
            />
          </div>
        )
      })
    return ( 
      <ExplorePage>
        <h1>explore</h1>
        <form onSubmit={() => this.searchBooks()}>
          <input value={this.state.userInput} type="text" onChange={(e) => this.handleOnChange('userInput', e.target.value)} autoFocus/>
        </form>
      <MappedBooks>

        {mappedBooks}
      </MappedBooks>
      </ExplorePage>
     );
  }
}
 
export default Explore;