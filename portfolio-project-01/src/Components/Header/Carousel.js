import React, { Component } from 'react';
import styled from 'styled-components';
import logoIntro from '../../assets/home/logo_intro.png'
import sideSeparator from '../../assets/home/side-separator.png'


const HeaderMainStyle = styled.section`
position: absolute;
height: 100vh;
top: 0;
  img { 
    width: 100vw;
    object-fit:cover;
    height: 100vh;
    position:relative;
  }
  .carousel__content { 
    position: absolute;
    top: 0;
    bottom: 0;
    font-size: 5rem;
    color: white;
    z-index: 999;
    width: 100%;
    text-align: center;
    margin-top: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    .carousel__fine_dinning  { 
        max-width: 100%;
        width: 335px;
        height: auto;
    }
    .carousel__arrow  { 
        max-width: 100%;
        width: 100px;
        height: auto;
        margin: 20px 0;
    }

  h2 { 
    font-family: 'Oswald', sans-serif;
    font-size: 6.5rem;
    text-align: center;
    color: var(--white);
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin: 70px 0 30px 0;
  }

    p { 
      font-size: 2rem;
        font-style: italic;
        color: var(--white);
        font-weight: 300;
        font-family: 'Libre Baskerville', serif;
        width: 100%;
        /* will have to change marginbottom later with media queries */
        margin-bottom: 120px;
    }


      .carousel__go-down { 
      padding: 11.5px 15.5px;
      border-radius: 50%;
      border: 2px solid #fff;
      .fa-angle-down { 
        
        color: #ffff;
        font-size: 2rem;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-name: scroll;
        @keyframes scroll {
          0% {
            opacity: 0;
            transform: translateY(-18px)
          }
          100% {
            opacity: 1;
            transform: translateY(14px)
          }
        }
      }
    }
  }
  /* the buttons and the fine dinning image is wrap here  */
  .carousel__controls_wrapper { 
      
        display: flex;
        width: 100%;
        justify-content: space-between;
        .carousel__left_btn,
        .carousel__right_btn{ 
          /* align-self: auto | flex-start | flex-end | center | baseline | stretch; */
          align-self: flex-end;
          width: 79px;
         height: 79px;
         cursor: pointer;
    /* margin-left: 15px; */
      opacity: 0.3;
      -webkit-transition: all .3s ease-in-out;
      -moz-transition: opacity .3s ease-in-out;
      -o-transition: all .3s ease-in-out;
      transition: all .3s ease-in-out;
      background-color: rgba(255,255,255,.01);
        color: rgba(255,255,255,.01);
        font-size:4rem;
        color: gray;
        border-radius:50%;
        outline: none;

          &:hover {
             opacity: 1;
          }
          &:active{
            transform: translateY(4px);
          }
        }
        .carousel__left_btn { 
          margin-left: 15px;
          z-index: 9999;

        }
        .carousel__right_btn { 
          margin-right: 15px;
        }
    }
    
   .slide {
     display: none;
    }
   .active { 
     display: block;
   }
`

const items = [
  {
    src: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&dpr=1&w=2000',
    caption: 'The Soul Food & Bistro'
  },
  {
    src: 'https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=2000',
    caption: 'Welcome to Restaurant'
  },
  {
    src: 'https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=2000',
    caption: 'Elixir Exclusively Food'
  }
]


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }

    window.setInterval(() => {
      this.next();
    }, 4000);
  }

  //carouse control
  next = () => {
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }
  //carouse control
  previous = () => {
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }




  render() {
    const { activeIndex } = this.state
    // first param deconstruct item of object second is the length
    const slides = items.map(({ src, caption }, index) => {
      // check if the index is equal to currentIndex if it is add className
      let computedClass = index === activeIndex ? 'slide active' : 'slide';
      return (
        <section className={computedClass} key={index}>
          {/* this is where we initializing images */}
          <img src={src} alt="vintage-restuarant" className="carousel__img" />
          {/* carousel content wrapper */}
          <div className="carousel__content">
            <div className="carousel__controls_wrapper">
              {/* left carousel button */}
              <button className="carousel__left_btn" onClick={this.previous}>
                <i className="fas fa-caret-left"></i>
              </button>
              {/* big image within jumbotron */}
              <img className="carousel__fine_dinning" src={logoIntro} alt="fine dinning" />
              <button className="carousel__right_btn" onClick={this.next}>
                <i className="fas fa-caret-right"></i>
              </button>
            </div>
            {/* big title  */}
            <h2 className="carousel__caption">{caption}</h2>
            {/* gold arrow  */}
            <img className="carousel__arrow" src={sideSeparator} alt="arrow" />
            <p>The Chef creates divine combinations</p>
            {/* still need to work on animation of going down arrow */}
            <a className="carousel__go-down" href="#about">
              <i className="fas fa-angle-down"></i>
            </a>
          </div>
        </section>
      )
    })
    return (
      <HeaderMainStyle>
        {/* render items here images */}
        {slides}
      </HeaderMainStyle>
    );
  }
}

export default Carousel;