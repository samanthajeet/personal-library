import React, { Component } from "react";
import axios from "axios";
import * as Vibrant from "node-vibrant";
// import palette from "image-palette";
// import pixels from "image-palette";
// import html2canvas from 'html2canvas';

import { BookDetailPage, BookImageHeader, BookDetailBody } from "./style";


class BookDetail extends Component {
  state = {
    bookInfo: {},
    images: {},
    authors: [],
    palette: [],
    canvas: ''
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
    console.log(response.data.volumeInfo)
    await this.setState({
      bookInfo: response.data.volumeInfo,
      images: response.data.volumeInfo.imageLinks,
      authors: response.data.volumeInfo.authors
    });

    this.createVibrant()
  };


  createVibrant() {
    axios.get(`https://cors-anywhere.herokuapp.com/${this.state.images.thumbnail}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }).then(response => {
      // console.log(3, response.config.url)
      let img = response.config.url
      Vibrant.from(img).getPalette((err, palette) => {
        let palette2 = {};
        for (let prop in palette) {
          palette2[prop] = palette[prop].hex;
        }
        this.setState({
          palette: palette2
        });
        // console.log(this.state.palette);
      });
    })
    // let img = 'http://covers.openlibrary.org/b/isbn/0060652926-L.jpg';
    // console.log(img);
  }




  createMarkup() {
    return { __html: `${this.state.bookInfo.description}` };
  }

  render() {
    let { authors } = this.state;
    let { title, averageRating, printedPageCount,publishedDate } = this.state.bookInfo;
    let { extraLarge, large, medium, thumbnail } = this.state.images;
    let {
      Vibrant,
      Muted,
      LightVibrant,
      LightMuted,
      DarkVibrant,
      DarkMuted
    } = this.state.palette;
    return (
      <BookDetailPage >
        <BookImageHeader 
        // style={{background: `linear-gradient(${LightVibrant}, ${Vibrant}, ${DarkVibrant}`}}
        >
          <img
            src={extraLarge ? extraLarge : large ? large : medium ? medium : thumbnail}
            alt={title}
          />
          <div className="header-book-info">
            <h1>{title}</h1>
            <h3>by {authors}</h3>
          </div>
        </BookImageHeader>

        <BookDetailBody>
          <div id="capture" className="left-panel box-dropsh">
            <div id="capture"  className="book-detail-cover" >
              <img  src={medium ? medium : thumbnail} alt={title} id="capture" />
            </div>
          </div>
          <div className="center-panel ">
            <div className="book-info box-dropsh">
              <div className="book-info-header">
                <p>{averageRating} | </p>
                <p>{printedPageCount} pages | </p>
                <p>{publishedDate}</p>
              </div>
              <div dangerouslySetInnerHTML={this.createMarkup()} />;
            </div>
          </div>
          <div className="right-panel box-dropsh" />
        </BookDetailBody>
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
