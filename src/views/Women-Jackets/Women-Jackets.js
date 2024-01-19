import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Women-Jackets.css'

const WomenJackets = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/womens-jackets", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="women-jackets-container">
      <Helmet>
        <title>Women-Jackets - 361 Project</title>
        <meta property="og:title" content="Women-Jackets - 361 Project" />
      </Helmet>
      <h1 className="women-jackets-text">Women&apos;s Jackets</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default WomenJackets
