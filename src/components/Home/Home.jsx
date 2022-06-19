import "./home.scss"
import React from "react";
import {Link} from "react-router-dom";

function Home() {
   return ( <>
       <div className="home-grid">
           <aside className="home-aside">
               <ul>
                   <li>Бытовая техника</li>
                   <li>Гаджеты</li>
                   <li>Компьютеры</li>
                   <li>Офис</li>
                   <li>Мультимедиа</li>
               </ul>
           </aside>
            <section className="home-section">
                Хиты продаж
            </section>
           <section className="home-section">
               Новое
           </section>
       </div>
       <section className="companies">
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
           <div>
               <Link to="search">
                   <img src="brands/apple.png" alt="apple logo"/>
               </Link>
           </div>
       </section>
   </>)
}

export default Home