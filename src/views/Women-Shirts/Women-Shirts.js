import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Women-Shirts.css'

const WomenShirts = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:5257/womens-shirts", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error));
  },[])
  return (
    <div className="women-shirts-container">
      <Helmet>
        <title>Women-Shirts - 361 Project</title>
        <meta property="og:title" content="Women-Shirts - 361 Project" />
      </Helmet>
      <h1 className="women-shirts-text">Women&apos;s Shirts</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default WomenShirts
