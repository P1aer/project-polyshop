import Header from "./components/Header/Header";
import React, {useState} from "react";
import {  Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home/Home";
import Basket from "./components/Basket/Basket";
import Search from "./components/Search/Search";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";
import AuthForm from "./components/auth-form/auth-form";

function App() {
    const [authOpen, setAuthOpen] = useState(false)
  return (
    <div className="App">
       {/* убрать если не нужно сохранять состояние формы*/}
        <AuthForm open={setAuthOpen} visible={authOpen}/>
      <Header authOpen={setAuthOpen}/>
      <div className="wrapper">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="basket" element={<Basket/>}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/product/:prId" element={<Product/>}/>
              <Route
                  path="*"
                  element={<Navigate to="/" replace />}
              />
          </Routes>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
