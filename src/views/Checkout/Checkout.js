import { Navigate } from 'react-router-dom'
import { useState } from 'react'

import { Helmet } from 'react-helmet'

import './Checkout.css'

const Checkout = (props) => {

  const [didCheckout, setDidCheckout] = useState(false);

  return (
    <div className="checkout-container">
      <Helmet>
        <title>Checkout - 361 Project</title>
        <meta property="og:title" content="Checkout - 361 Project" />
      </Helmet>
      <h1 className="checkout-text">Checkout Page</h1>
      <div className="checkout-container1">
        <div className="checkout-container2">
          <input type="text" className="checkout-card-number input" />
          <input type="text" className="checkout-exp-date input" />
          <input type="text" className="checkout-cvv input" />
          <input type="text" className="checkout-card-name input" />
          <span className="checkout-text01">Exp. Date (MM/YYYY):</span>
          <span className="checkout-text02">Credit Card #:</span>
          <span className="checkout-text03">CVV Code:</span>
          <span className="checkout-text04">Name on Card:</span>
          <h1>Payment Information</h1>
        </div>
        <div className="checkout-container3">
          <input type="text" className="checkout-street-address input" />
          <input type="text" className="checkout-city input" />
          <input type="text" className="checkout-state input" />
          <input type="text" className="checkout-zip input" />
          <span className="checkout-text06">City:</span>
          <span className="checkout-text07">Street Address:</span>
          <span className="checkout-text08">State:</span>
          <span className="checkout-text09">Postal Code:</span>
          <h1>Shipping Address</h1>
        </div>
      </div>
      <button onClick={() => {props.deleteCart(), setDidCheckout(true)}} className="checkout-button button">
        {didCheckout ? <Navigate to="/" /> : "Place Order"}
      </button>
    </div>
  )
}

export default Checkout
