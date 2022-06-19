import React, {useState} from "react";
import "./header.scss";
import { Link } from "react-router-dom";


function Header({authOpen}) {
  return (
      <header>
          <div>
              <nav className="head-container">
                  <Link to="/">
                      <img src="logo.png" alt="logo" className="head-logo"/>
                  </Link>
                  <div className="search-out">
                      <div className="search-in">
                          <input placeholder="поиск по сайту" className="input par" type="text"/>
                          <img className="search-icon" src="search.svg" alt="search icon"/>
                          <div className="suggestion">

                          </div>
                      </div>

                  </div>
                  <Link to="basket">
                      <div className='icon-container'>
                          <img className="head-icon" src="cart.svg" alt="cart icon"/>
                          <span>Корзина</span>
                      </div>
                  </Link>
                  <div className='icon-container' onClick={() => authOpen(true)}>
                      <img className="head-icon" src="profile.svg" alt="cart icon"/>
                      <span>Войти</span>
                  </div>
              </nav>
          </div>
      </header>)
}

export default Header