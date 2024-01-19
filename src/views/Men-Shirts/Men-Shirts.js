import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect, useContext } from 'react';

import './Men-Shirts.css'
import { ProductPriceContext } from '../../components/ProductPriceContext';

const MenShirts = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/mens-shirts", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  },[])
  return (
    <div className="men-shirts-container">
      <Helmet>
        <title>Men-Shirts - 361 Project</title>
        <meta property="og:title" content="Men-Shirts - 361 Project" />
      </Helmet>
      <h1 className="men-shirts-text">Men&apos;s Shirts</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default MenShirts
