import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Kids-Shirts.css'

const KidsShirts = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/kids-shirts", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="kids-shirts-container">
      <Helmet>
        <title>Kids-Shirts - 361 Project</title>
        <meta property="og:title" content="Kids-Shirts - 361 Project" />
      </Helmet>
      <h1 className="kids-shirts-text">Kid&apos;s Shirts</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default KidsShirts
