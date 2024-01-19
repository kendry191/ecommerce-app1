import { Helmet } from 'react-helmet'
import DisplayProducts from '../../components/DisplayProducts';
import { useState, useEffect } from 'react';

import './Necklaces.css'

const Necklaces = (props) => {
  const [products, setProducts] = useState([]);
  const productHandler = (products) => setProducts(products);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("http://localhost:5257/Necklaces", requestOptions)
      .then(response => response.json())
      .then(response => {productHandler(response);
      })
      .catch(error => console.log('error', error))
  }, [])
  return (
    <div className="necklaces-container">
      <Helmet>
        <title>Necklaces - 361 Project</title>
        <meta property="og:title" content="Necklaces - 361 Project" />
      </Helmet>
      <h1 className="necklaces-text">
        <span>Necklaces</span>
        <br></br>
      </h1>
      <DisplayProducts addToCart={props.addToCart} products={products} />
    </div>
  )
}

export default Necklaces
