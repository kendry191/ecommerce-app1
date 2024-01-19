import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Kids-Shorts.css'

const KidsShorts = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/kids-shorts", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="kids-shorts-container">
      <Helmet>
        <title>Kids-Shorts - 361 Project</title>
        <meta property="og:title" content="Kids-Shorts - 361 Project" />
      </Helmet>
      <h1 className="kids-shorts-text">Kid&apos;s Shorts</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default KidsShorts
