import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Women-Shorts.css'

const WomenShorts = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/womens-shorts", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="women-shorts-container">
      <Helmet>
        <title>Women-Shorts - 361 Project</title>
        <meta property="og:title" content="Women-Shorts - 361 Project" />
      </Helmet>
      <h1 className="women-shorts-text">Women&apos;s Shorts</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default WomenShorts
