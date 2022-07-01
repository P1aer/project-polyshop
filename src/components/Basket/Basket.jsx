import "./basket.scss"
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link} from "react-router-dom";
import axios from "../../axios";
import {deleteCart} from "../../redux/slices/authSlice";

function Basket() {
    const cart = useSelector((state) => state.auth.cart)
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    React.useEffect(() => {
        if (cart.length > 0) {
            axios.post("/product/getCart",cart)
                .then(res => {
                    setData(res.data)
                })
        }

    },[cart])
    const onDelete = (id) => {
        dispatch(deleteCart(id))
    }
    return ( <div className="cart-section">
        {
            cart.length > 0 ?
                data.map((elem,ind) =>
                    <div key={ind} className="cart-block">
                        <div className="cart-info">
                            <img src={`https://localhost:8433/${elem.picture}`} alt=""/>
                            <div>
                                <sub>код товара: {elem._id}</sub>
                                <h3>{elem.name}</h3>
                            </div>
                        </div>
                        <div className="cart-btns">
                            <h3>{elem.price} <span>$</span></h3>
                            <img onClick={()=> onDelete(elem._id)} src="/delete.svg" alt="delete icon"/>
                        </div>
                    </div>)
                : <>
                    <img src="/cart.jpg" alt=""/>
                    <h3 className='no-goods'>Корзина пуста <br/> посмотрите каталог или авторизируйтесь</h3>
                    <Link to="/"> <button className="goods-btn">На главную</button> </Link>
                </>
        }
    </div>)
}

export default Basket