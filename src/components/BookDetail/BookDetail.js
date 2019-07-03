import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import * as Vibrant from "node-vibrant";
// var palette = require('image-palette')
// var pixels = require('image-pixels')
import palette from 'image-palette';
import pixels from 'image-palette'

const BookDetailPage = styled.div`
  * {
    margin: 0;
  }
  border: 1px solid orange;
`;

const BookImageHeader = styled.div`
  border: 1px solid green;
  height: 20rem;
  width: 100vw;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .header-book-info {
    border: 1px solid white;
    background: white;
    position: absolute;
    top: 20%;
    left: 20%;
    /* transform: translate(-50%, -50%); */
    color: black;
    /* width: 70%; */
    /* text-align: center; */
    padding: 0.25rem;

    h1 {
      font-size: 3rem;
    }
  }
`;

class BookDetail extends Component {
  state = {
    bookInfo: {},
    images: {},
    authors: [],
    palette: []
  };

  componentDidMount() {
    this.getBookInfo();
  }

  getBookInfo = async () => {
    let { id } = this.props.match.params;
    const GoogleBooksApi = process.env.REACT_APP_GOOGLEBOOKS;
    let response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${GoogleBooksApi}`
    );
    // console.log(response.data.volumeInfo);
    this.setState({
      bookInfo: response.data.volumeInfo,
      images: response.data.volumeInfo.imageLinks,
      authors: response.data.volumeInfo.authors
    });

    this.createVibrant()
    console.log(this.state.bookInfo);
    

  };

  getPalette = async() =>{
    let {ids, colors} = palette(await pixels(`${this.state.images.large}`))
    console.log(1, ids, colors)
  }

  createVibrant() {
    let img = this.createHTTPS(this.state.images.large)
    console.log(img)
    Vibrant.from(img).getPalette((err, palette) => {
      let palette2 = {}
      for(let prop in palette){
        palette2[prop] = palette[prop].hex
      }
      this.setState({
        palette: palette2
      })
      console.log(this.state.palette)
    })
  }

  createHTTPS(url){
    let position = 4
    var output = [url.slice(0, position), 's', url.slice(position)].join('');
    console.log(1, output)
    return output
  }




  render() {
    let { authors } = this.state;
    let { title, description } = this.state.bookInfo;
    let { extraLarge, large } = this.state.images;
    let {Vibrant, Muted, LightVibrant, LightMuted, DarkVibrant, DarkMuted} = this.state.palette
    return (
      <BookDetailPage>
        <BookImageHeader>
          <img src={extraLarge ? extraLarge : large} alt={title} />
          <div className="header-book-info">
            <h1>{title}</h1>
            <h3>{authors}</h3>
          </div>
        </BookImageHeader>
        <p>{description}</p>
        <p style={{background: `${Vibrant}`}}>vibrant</p>
        <p style={{background: `${Muted}`}}>muted</p>
        <p style={{background: `${LightVibrant}`}}>light vibrant</p>
        <p style={{background: `${LightMuted}`}}>light muted</p>
        <p style={{background: `${DarkVibrant}`}}>DarkVibrant</p>
        <p style={{background: `${DarkMuted}`}}>DarkMuted</p>
      </BookDetailPage>
    );
  }
}

export default BookDetail;
