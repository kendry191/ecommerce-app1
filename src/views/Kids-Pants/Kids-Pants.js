import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Kids-Pants.css'

const KidsPants = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/kids-pants", requestOptions)
      .then(response => response.json())
      .then(response => productHandler(response))
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="kids-pants-container">
      <Helmet>
        <title>Kids-Pants - 361 Project</title>
        <meta property="og:title" content="Kids-Pants - 361 Project" />
      </Helmet>
      <h1 className="kids-pants-text">Kid&apos;s Pants</h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default KidsPants
