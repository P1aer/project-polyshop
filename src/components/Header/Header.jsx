import React, {useState} from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { logout} from "../../redux/slices/authSlice";
import {isAuthSelector} from "../../redux/slices/authSlice";
import axios from "../../axios";


function Header({authOpen}) {
    const isAuth = useSelector(isAuthSelector)
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
        localStorage.removeItem("token")
    }
    const [open, setOpen] = useState(false)
    const [suggest,setSuggest] = useState([])

    const onChange = async (ev) => {
        if (ev.target.value) {
            const res = await axios.post("/product/search",{data: ev.target.value})
            setSuggest(res.data)
        }
        else  {
            setSuggest([])
        }
    }
  return (
      <header>
          <div>
              <nav className="head-container">
                  <Link to="/">
                      <img src="/logo.png" alt="logo" className="head-logo"/>
                  </Link>
                  <div className="search-out">
                      <div className="search-in" >
                          <input onChange={onChange}
                                 placeholder="поиск по сайту"
                                 className=""
                                 type="text"/>
                          {
                              open ?
                                  <img onClick={() => setOpen(false)} className="search-icon" src="/close.svg" alt="search icon"/>
                                  :
                                  <img onClick={() => setOpen(true)} className="search-icon" src="/search.svg" alt="search icon"/>
                          }

                          { open &&
                              <div className="suggestion">
                              {
                                  suggest.map((obj, ind) =>
                                      <Link onClick={()=> setOpen(false)} key={ind} to={`/product/${obj._id}`}>
                                          {obj.name}
                                      </Link>
                                  )
                              }
                             </div>
                          }
                      </div>

                  </div>
                  <Link to="basket">
                      <div className='icon-container'>
                          <img className="head-icon" src="/cart.svg" alt="cart icon"/>
                          <span>Корзина</span>
                      </div>
                  </Link>
                  {
                      !isAuth ?
                          <div className='icon-container' onClick={() => authOpen(true)}>
                            <img className="head-icon" src="/profile.svg" alt="cart icon"/>
                            <span>Войти</span>
                      </div> :
                          <div className='icon-container' onClick={onLogout}>
                              <img className="head-icon" src="/profile.svg" alt="cart icon"/>
                              <span>Выйти</span>
                          </div>

                  }

              </nav>
          </div>
      </header>)
}

export default Header