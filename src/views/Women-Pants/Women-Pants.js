import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Women-Pants.css'

const WomenPants = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5257/womens-pants", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  },[])
  return (
    <div className="women-pants-container">
      <Helmet>
        <title>Women-Pants - 361 Project</title>
        <meta property="og:title" content="Women-Pants - 361 Project" />
      </Helmet>
      <h1 className="women-pants-text">Women&apos;s Pants</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default WomenPants
