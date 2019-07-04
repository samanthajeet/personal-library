import React, { Component } from "react";
import styled from "styled-components";


const Hero = styled.div`
  /* border: 1px solid purple; */
  height: 92vh;
  overflow: hidden;
  animation: fade-in 3s ;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    /* position: relative; */
  }
  #motto {
    border: 1px solid white;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: black;
    font-size: 4.5rem;
    margin: none;
    width: 70%;
    text-align: center;
  }

  @keyframes fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}


`;

class Landing extends Component {
  state = {
    heroImages: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      "https://images.unsplash.com/photo-1517414204284-fb7e98b2e255?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80",
      "https://images.unsplash.com/photo-1450107579224-2d9b2bf1adc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      "https://images.unsplash.com/photo-1522008342704-6b265b543c37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
      'https://images.unsplash.com/photo-1488994038434-e995b7a4ba35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
      'https://images.unsplash.com/photo-1534258770914-022a9ce4e0ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'

    ]
  };

  componentDidMount() {
    this.randomNum()

  }



  randomNum ()  {
    const ceiling = this.state.heroImages.length;
    const index = Math.floor(Math.random() * (ceiling - 1) + 1);
    return index;
  }



  render() {
    let heroImage = this.state.heroImages[this.randomNum()];
    return (
      <>
        <Hero>
            <h1 id="motto">meet your next favorite book</h1> 
          
          <img src={`${heroImage}`} alt="bookshelf" />
        </Hero>
      </>
    );
  }
}

export default Landing;
