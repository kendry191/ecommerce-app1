import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Men-Shorts.css'

const MenShorts = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5257/mens-shorts", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  },[])
  return (
    <div className="men-shorts-container">
      <Helmet>
        <title>Men-Shorts - 361 Project</title>
        <meta property="og:title" content="Men-Shorts - 361 Project" />
      </Helmet>
      <h1 className="men-shorts-text">
        <span>Men&apos;s Shorts</span>
        <br></br>
      </h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default MenShorts
