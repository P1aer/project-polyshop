import "./home.scss"
import React from "react";
import {Link} from "react-router-dom";
import axios from "../../axios"
import { useDispatch, useSelector } from "react-redux"
import {fetchCategories, fetchCompanies, fetchProducts} from "../../redux/slices/productSlice";
const sortDesc = (a,b) => {
    if(new Date(a.createdAt) > new Date(b.createdAt)) {
        return -1
    }
    else if (new Date(a.createdAt) === new Date(b.createdAt)) {
        return 0
    }
    else return 1
}
const priceDesc = (a,b) => {
    if(Number(a.price) > Number(b.price)) {
        return -1
    }
    else if (Number(a.price) === Number(b.price)) {
        return 0
    }
    else return 1
}

function Home() {
    const dispatch = useDispatch()

    const { products, categories, companies } = useSelector(state => state.data)
    React.useEffect(() => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
        dispatch(fetchCompanies())
    },[])
    const productIsLoading = products.status === "loading"
    const sellerIsLoading = companies.status === "loading"
    const categoryIsLoading = categories.status === "loading"
   return ( <>
       <div className="home-grid">
           <aside className="home-aside">
               <ul>
                   { categoryIsLoading ? null :
                       categories.items.map((obj,ind) =>
                       <li key={obj._id}>
                           <Link to={`category/${obj._id}`}>
                               <h3>{obj.name}</h3>
                           </Link>

                       </li>
                   )}
               </ul>
           </aside>
            <section className="home-section">
                <h2>Хиты продаж</h2>
                <div>
                    {
                        productIsLoading ? null
                            : [...products.items].sort(priceDesc).slice(0,5).map( (obj, ind) =>
                                <Link key={obj._id} to={`product/${obj._id}`}>
                                    <div >
                                        <img src={`https://localhost:8433/${obj.picture}`}  alt=""/>
                                        <h3>{obj.name}</h3>
                                        <h2>{obj.price} <span>$</span></h2>
                                    </div>
                                </Link>
                            )
                    }
                </div>

            </section>
           <section className="home-section">
               <h2>Новое</h2>
               <div>
                   {
                       sellerIsLoading ? null
                           : [...products.items].sort(sortDesc).slice(0,5).map( (obj, ind) =>
                           <Link key={obj._id} to={`product/${obj._id}`}>
                               <div >
                                   <img src={`https://localhost:8433/${obj.picture}`}  alt=""/>
                                   <h3>{obj.name}</h3>
                                   <h2>{obj.price} <span>$</span></h2>
                               </div>
                            </Link>
                           )
                   }
               </div>

           </section>
       </div>
       <section className="companies">
               {
                   productIsLoading ? null
                       : companies.items.map((obj,ind) =>
                           <div key={obj._id}>
                               <Link  to={`company/${obj._id}`}>
                                   <img src={`https://localhost:8433/${obj.logo}`} alt="seller img"/>
                               </Link>
                           </div>
                       )
               }
       </section>
   </>)
}

export default Home