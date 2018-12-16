import React, { Component } from 'react';
import styled from 'styled-components';

import menuLogo from '../../assets/home/menu_logo.png';
import buttonLine from '../../assets/home/button_line.png';

const MenuWrapper = styled.div`
  .menu__logo { 
    padding: 50px 0;
    margin: 0 auto;
    display: flex;
  }

  .menu__flex { 
    display: flex; 
    justify-content: space-between;


    .menu__title { 
      h3 { 
     text-transform: uppercase;   
      color: var(--darkGold);
      font-family: "Oswald", sans-serif;
      font-size: 24px;
      font-weight: 400;
      margin-bottom: 33px;
      }
    }
  }


  .menu__item .items {
    width: 300px;
    /* border: 1px solid red; */
    margin-bottom: -40px;
      .menu__caption { 
      text-transform: uppercase;
      font-family: "Cabin", sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #0c0901;
      margin-bottom: 10px;
      text-align: left;
    }
    .menu__item__flex {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-top: -14px;
    

    .menu__ingredients { 
      font-size: 13px;
      text-transform: none;
      font-weight: 400;
      color: #484745;
    }

    .menu__price { 
      font-family: "Cabin", sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: 14px;
      color: #bfa760;
    }
   }
  }

  .menu__button {
    a {
    display: block;
    margin: 0 auto;
    font-family: "Cabin", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    text-align: center;
    font-size: 1.8rem;
    color: var(--goldBtn);
    border: 2px solid var(--goldBtn);
    padding: 16px 10px;
    margin-top: 68px;
    margin-bottom: 138px;
    background: transparent;
    -webkit-transition: 0.5s all ease;
    -o-transition: 0.5s all ease;
    transition: 0.5s all ease;
    width: 260px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

      &:hover {
        background: var(--goldBtn);
        color: var(--white);
      }
       
      &::before {
        content: url(${buttonLine});
        position: absolute;
        right: 300px;
      }
      &::after {
        content: url(${buttonLine});
        position: absolute;
        left: 300px;
      }
    }
  }

`

const primesteak = [
  {
    caption: 'FILET',
    ingredients: "7 oz. Center Cut10 oz. Double cut",
    price: "$14.49"
  },
  {
    caption: 'BOINE IN FILET',
    ingredients: "10 oz Greg Norman Ranch, Australia",
    price: "$20.50"
  },
  {
    caption: 'NEW YORK STRIP',
    ingredients: "9 oz. Center Cut12 oz. Double cut oz",
    price: "$9.99"
  },
  {
    caption: 'PORTERHOUSE',
    ingredients: "7 oz. Center Cut10 oz. Double cut",
    price: "$7.99"
  },
  {
    caption: 'DELMONICO',
    ingredients: "10 oz Greg Norman Ranch, Australia",
    price: "$17.99"
  },
]

const drinkMenu = [
  {
    caption: 'RAIMAT ABADIA',
    ingredients: "Complex, Dark Cherry, Spice, bodied",
    price: "$8.50"
  },
  {
    caption: 'EDEN CHARDONNAY',
    ingredients: "Elegant, Lemon, Vanilla, bodied",
    price: "$15.50"
  },
  {
    caption: 'MAILLY BRUT RESERVA',
    ingredients: "Dry, Toast, Citrus, Medium-bodied",
    price: "$17.50"
  },
  {
    caption: 'LEON V DE ARMENIA',
    ingredients: "Crisp, Citrus, Full-bodied",
    price: "$12.50"
  },
  {
    caption: 'CABERENET SAUVIGNON',
    ingredients: "Intense, Cherry, Chocolate, Full-bodied",
    price: "$30.50"
  },
]

const desserts = [
  {
    caption: 'CREME BRULEE',
    ingredients: "Creme Anglaise, Vanilla Bean Ice Cream",
    price: "$7.49"
  },
  {
    caption: 'WARM CHOCOLATE ',
    ingredients: "Amarena Cherries, Kirsch Cream",
    price: "$6.50"
  },
  {
    caption: 'CHEESE CAKE',
    ingredients: "Cheese creme, ice cream, strawberry",
    price: "$4.50"
  },
  {
    caption: 'APPLE TURNOVER',
    ingredients: "Creme Anglaise, Vanilla Bean Ice Cream",
    price: "$7.99"
  },
  {
    caption: 'SORBET WITH FRUIT',
    ingredients: "Lemon, organge, strawberry or mango",
    price: "$8.50"
  },
]



class Menu extends Component {
  state = {}
  render() {
    return (
      <MenuWrapper>
        <div className="wrapper">
          <img src={menuLogo} alt="menu" className="menu__logo" />
          <div className="menu__flex">
            <div className="menu__item menu__title">
              <h3>prime steaks</h3>
              {
                primesteak.map(({ caption, ingredients, price }, index) => (
                  <div className="items" key={index}>
                    <h3 className="menu__caption">
                      {caption}
                    </h3>
                    <div className="menu__item__flex">
                      <div className="menu__ingredients"><span>{ingredients}</span></div>
                      <p className="menu__price">{price}</p>
                    </div>
                  </div>
                ))
              }

            </div>
            <div className="menu__item menu__title">
              <h3>drinks & wines</h3>
              {
                drinkMenu.map(({ caption, ingredients, price }, index) => (
                  <div className="items" key={index}>
                    <h3 className="menu__caption">
                      {caption}
                    </h3>
                    <div className="menu__item__flex">
                      <div className="menu__ingredients">{ingredients}</div>
                      <p className="menu__price">{price}</p>
                    </div>
                  </div>
                ))
              }

            </div>
            <div className="menu__item menu__title">
              <h3>desserts</h3>
              {
                desserts.map(({ caption, ingredients, price }, index) => (
                  <div className="items" key={index}>
                    <h3 className="menu__caption">
                      {caption}
                    </h3>
                    <div className="menu__item__flex">
                      <div className="menu__ingredients">{ingredients}</div>
                      <p className="menu__price">{price}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="menu__button"><a href="...">view complete menu</a></div>
        </div>
      </MenuWrapper>

    );
  }
}

export default Menu;