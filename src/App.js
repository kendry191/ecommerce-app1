import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import Home from './views/Home/Home'
import Necklaces from './views/Necklaces/Necklaces'
import Backpacks from './views/Backpacks/Backpacks'
import KidsShorts from './views/Kids-Shorts/Kids-Shorts'
import KidsPants from './views/Kids-Pants/Kids-Pants'
import Sales from './views/Sales/Sales'
import WomenShorts from './views/Women-Shorts/Women-Shorts'
import MenShirts from './views/Men-Shirts/Men-Shirts'
import CartPage from './views/Cart-Page/Cart-Page'
import MenJackets from './views/Men-Jackets/Men-Jackets'
import WomenPants from './views/Women-Pants/Women-Pants'
import LoginPage from './views/Login-Page/Login-Page'
import Register from './views/Register/Register'
import KidsJackets from './views/Kids-Jackets/Kids-Jackets'
import MenShorts from './views/Men-Shorts/Men-Shorts'
import Watches from './views/Watches/Watches'
import WomenShirts from './views/Women-Shirts/Women-Shirts'
import HomePage from './views/Home-Page/Home-Page'
import MenPants from './views/Men-Pants/Men-Pants'
import KidsShirts from './views/Kids-Shirts/Kids-Shirts'
import Checkout from './views/Checkout/Checkout'
import Hats from './views/Hats/Hats'
import WomenJackets from './views/Women-Jackets/Women-Jackets'
import { ProductPriceContext } from './components/ProductPriceContext'
import About from './views/About/About'

const App = () => {

  const [productsAndSales, setProductsAndSales] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/sales", requestOptions)
      .then(response => response.json())
      .then(result => setProductsAndSales(result))
      .catch(error => console.log('error'));
  }, []);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([item, ...cart]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => {
      return product.name !== item.name;
    }));
  }

  const deleteCart = () => {
    setCart([]);
  }

  return (
    <div>
      <BrowserRouter>
        <ProductPriceContext.Provider value={{ productsAndSales, addToCart }}>
          <Routes>
            <Route element={<Home />} path="/" >
              <Route element={<Necklaces />} path="necklaces" />
              <Route element={<Backpacks />} path="backpacks" />
              <Route element={<KidsShorts />} path="kids-shorts" />
              <Route element={<KidsPants />} path="kids-pants" />
              <Route element={<Sales />} path="sales" />
              <Route element={<WomenShorts />} path="women-shorts" />
              <Route element={<MenShirts />} path="men-shirts" />
              <Route element={<CartPage products={cart} removeFromCart={removeFromCart} />} path="cart-page" />
              <Route element={<MenJackets />} path="men-jackets" />
              <Route element={<WomenPants />} path="women-pants" />
              <Route element={<LoginPage />} path="login-page" />
              <Route element={<Register />} path="register" />
              <Route element={<KidsJackets />} path="kids-jackets" />
              <Route element={<MenShorts />} path="men-shorts" />
              <Route element={<Watches />} path="watches" />
              <Route element={<WomenShirts />} path="women-shirts" />
              <Route element={<HomePage />} path="/" />
              <Route element={<MenPants />} path="men-pants" />
              <Route element={<KidsShirts />} path="kids-shirts" />
              <Route element={<Checkout deleteCart={deleteCart} />} path="checkout" />
              <Route element={<Hats />} path="hats" />
              <Route element={<WomenJackets />} path="women-jackets" />
              <Route element={<About />} path="about" />
            </Route>
          </Routes>
        </ProductPriceContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;
