import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const HeaderStyle = styled.header`
/* background: var(--transparentBlack); */
.overlay_darken_img {
    background: black;
    opacity: 0.4;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
  }

.wrapper { 
  display: flex;
  align-items:center;  
}

  nav { 
    position: relative;
    z-index: 9999;
    background: var(--transparentBlack);
    box-shadow: 0 1px 3px rgba(0,0,0,0.11);
    -webkit-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  .active{ 
    color: var(--gold);
  }

 a { 
  padding: 40px 0;
  color: var(--white);
  margin-left: 37px;


  &:hover { 
    color: var(--gold)!important;
  }
/* logo */
  &:first-child { 
    margin-right: auto;
    margin-left: 0px;
    font-size: 3rem;
    color: var(--gold);
    font-family: 'Oswald', sans-serif;
    font-weight:300;
    } 
  }
/* 
  nav  { 
    position: fixed;
    top: 0;
    width: 100%;
    transition: top 0.5s;
  } */
}

`



class Header extends Component {


  constructor(props) {
    super(props);

    this.state = {}

    let last_known_scroll_position = 0;
    let ticking = false;

    function doSomething(scroll_pos) {
      const nav = document.querySelector('nav');
      const navItem = document.querySelectorAll('nav .nav__item');
      const scrollPos = scroll_pos.toFixed(2);
      if (scrollPos > 306.67) {
        nav.style.position = "fixed"
        nav.style.top = 0
        nav.style.width = "100%"
        // nav.style.transition = "ease-in 1s"
        nav.style.background = "var(--white)"
        navItem.forEach((item) => {
          item.style.color = "var(--pTag)"
          // item.style.color = "var(--pTag)"
        })


      } else {
        nav.style.position = ""
        nav.style.top = ""
        nav.style.width = "100%"
        nav.style.background = ""
        nav.style.color = "var(--white)"
        navItem.forEach((item) => {
          item.style.color = "var(--white)"
        })
      }
    }

    window.addEventListener('scroll', function (e) {
      last_known_scroll_position = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(function () {
          doSomething(last_known_scroll_position);
          ticking = false;
        });

        ticking = true;
      }
    });
  }

  render() {
    return (
      <>
        <HeaderStyle >
          <div className="overlay_darken_img"></div>
          <nav  >
            <div className="wrapper ">
              <a href="...">Miranda</a>
              <a className="active" href="...">Home</a>
              <a href="..." className="nav__item">About</a>
              <a href="..." className="nav__item">Menu</a>
              <a href="..." className="nav__item">Gallery</a>
              <a href="..." className="nav__item">Reservations</a>
              <a href="..." className="nav__item">Location</a>
            </div>
          </nav>
        </HeaderStyle>
        {/* carousel and jumbotron  */}
        <Carousel />
      </>
    );
  }
}

export default Header;