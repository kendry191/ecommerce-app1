import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Men-Jackets.css'

const MenJackets = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5257/mens-jackets", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  },[])
  return (
    <div className="men-jackets-container">
      <Helmet>
        <title>Men-Jackets - 361 Project</title>
        <meta property="og:title" content="Men-Jackets - 361 Project" />
      </Helmet>
      <h1 className="men-jackets-text">
        <span>Men&apos;s Jackets</span>
        <br></br>
      </h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default MenJackets
