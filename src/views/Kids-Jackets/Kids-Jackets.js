import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Kids-Jackets.css'

const KidsJackets = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/kids-jackets", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="kids-jackets-container">
      <Helmet>
        <title>Kids-Jackets - 361 Project</title>
        <meta property="og:title" content="Kids-Jackets - 361 Project" />
      </Helmet>
      <h1 className="kids-jackets-text">
        <span>Kid&apos;s Jackets &amp; Hoodies</span>
        <br></br>
      </h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default KidsJackets
