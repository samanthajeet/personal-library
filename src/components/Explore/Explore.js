import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import BookCard from '../BookCard/BookCard'

import { ExplorePage, MappedBooks, SubmitForm, ExploreUpper } from './style'



class Explore extends Component {
  state = { 
    userInput: '',
    bookSearchResults: [],
    exploreImages: ['https://images.unsplash.com/photo-1514894780887-121968d00567?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80']
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
        <ExploreUpper>
        <SubmitForm onSubmit={() => this.searchBooks()}>
        <h2>search for your next favorte book</h2>
          <input value={this.state.userInput} type="text" onChange={(e) => this.handleOnChange('userInput', e.target.value)} autoFocus/>
        </SubmitForm>
        <img src={this.state.exploreImages[0]} alt="explore"/>
        </ExploreUpper>
      <MappedBooks>

        {mappedBooks}
      </MappedBooks>
      </ExplorePage>
     );
  }
}
 
export default Explore;