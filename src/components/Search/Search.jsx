import "./search.scss"
import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "../../axios";


function Search({ type }) {
    const {id} = useParams()
    const [data,setData] = useState([])

    React.useEffect(() => {
        axios.get(`/${type}/${id}`)
            .then(res => setData(res.data))
    },[])
    return ( <>
        {
            data.length === 0 ?
                <div className="info-no-product">
                    <img src="/no-search.jpg" alt=" cat jpg"/>
                    <h3 className=''>Товаров не найдено</h3>
                </div>
                : <section className="search-main">
                    {
                        data.map((obj,ind) =>
                            <Link key={obj._id} to={`/product/${obj._id}`}>
                                <div className="product-place">
                                    <img src={`https://localhost:8433/${obj.picture}`}  alt=""/>
                                    <h3>{obj.name}</h3>
                                    <h2>{obj.price} <span>$</span></h2>
                                </div>
                            </Link>
                        )
                    }
                </section>
        }


    </>)
}

export default Search