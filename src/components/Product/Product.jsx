import "./product.scss"
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "../../axios";
import {useDispatch, useSelector} from "react-redux";
import {addCart, isAuthSelector} from "../../redux/slices/authSlice";

function Product() {
    const dispatch = useDispatch()
    const {prId} = useParams()
    const [data, setData] = useState()
    const [isLoading, setLoading] = useState(true)
    const [btnText, setText] = useState("В корзину")
    const isAuth = useSelector(isAuthSelector)
    const cart = useSelector((state) => state.auth.cart)


    useEffect(() => {
        axios.get(`product/${prId}`)
            .then(res => {
                setLoading(false)
                setData(res.data)
                if (cart.includes(res.data._id)) {
                    setText("✓")
                }
            })
    },[prId])

    const keys = Object.keys(data?.info || {})
    const  onAdd = () => {
        if (btnText !==  "✓") {
            dispatch(addCart(data._id))
            setText("✓")
        }
    }
    return ( <>
        {
            isLoading ?
            <div className="loader-cont">
                <img className="loader" src="/load-gif.gif" alt=""/>
                <p>Идет загрузка товара
                    <span className="jumping-dots">
                        <span className="dot-1">.</span>
                        <span className="dot-2">.</span>
                        <span className="dot-3">.</span>
                    </span>
                </p>
            </div>
                :
                <div>
                    <section className="product-main">
                        <img src={`https://localhost:8433/${data.picture}`} alt="product img"/>
                        <div>
                            <div className="main-head">
                                <h2>{data.name} <img className="mini-logo" src={`https://localhost:8433/${data.seller.logo}`}alt=""/></h2>
                                <p>код товара {data._id}</p>
                            </div>

                            <h1>{data.price} <span>$</span></h1>
                            {isAuth ?
                                <button onClick={onAdd} className="cart-btn">{btnText}</button>
                                :
                                <h2 className="auth-btn">Авторизуйтесь для добавления товара в корзину</h2>}

                            <p>
                                Доставка завтра и позже, от 10 $<br/>
                                <br/>
                                Самовывоз<br/>
                                из 22 магазинов сегодня<br/>
                                из 77 магазинов и пунктов выдачи завтра и позже<br/>
                            </p>
                        </div>
                    </section>
                    <section className="product-desc">
                        <h2>Описание</h2>
                        <div>
                            {data.description}
                        </div>
                    </section>
                    <section className="product-info">
                        <h2>Характеристика</h2>
                        { keys.length > 0 ?
                            keys.map((key,ind) =>
                                <div className="info-cont" key={ind}>
                                    <span className="info-cat">{key}</span> <span className="info-key">{data.info[key]}</span>
                                </div>
                            )
                            : "Характеристика к товару отсутвует"

                        }
                    </section>
                </div>
        }

    </>)
}

export default Product