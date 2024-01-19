import { Link } from 'react-router-dom'
import { Box, Card, CardMedia, CardContent, Typography, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useEffect, useState } from 'react';

import { Helmet } from 'react-helmet'

import './Cart-Page.css'
import ProductPrice from '../../components/ProductPrice';
import { ProductPriceContext } from '../../components/ProductPriceContext';

const CartPage = (props) => {

  const { productsAndSales, addToCart } = useContext(ProductPriceContext)

  useEffect(() => {
    if (props.products) { findTotals() }
  }, [props.products]);

  const [totals, setTotals] = useState({ subtotal: 0, taxes: 0, total: 0 })

  const findTotals = () => {
    var temp = { subtotal: 0, taxes: 0, total: 0 };
    props.products.forEach(product => {
      if(product.saleId === null){
      temp.subtotal += product.price;
      } else {
        var sale = productsAndSales.find(productAndSale => productAndSale.item1.name === product.name).item2;
        if(sale.isPercentDiscount){
          temp.subtotal += product.price * (1 - (sale.discount / 100.0));
        } else {
          temp.subtotal += product.price - sale.discount;
        }
      }
    });

    temp.taxes = 0.07 * temp.subtotal;
    temp.total = temp.subtotal + temp.taxes;
    setTotals(temp);
  }

  const handleRemoveFromCart = (product) => {
    props.removeFromCart(product);
    findTotals();
  }

  return (
    <div className="cart-page-container">
      <Helmet>
        <title>Cart-Page - 361 Project</title>
        <meta property="og:title" content="Cart-Page - 361 Project" />
      </Helmet>
      <span className="cart-page-text04">Your Cart</span>
      <div className="cart-page-container1">
        <div className="cart-page-container2">
          <div className="cart-page-container3">
            <Grid container spacing={2}>
              {props.products.map((product, index) => (
                <Grid item key={index}>
                  <Card key={index} sx={{ height: 150, width: 500, display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ display: 'flex', fontWeight: '700', justifyContent: "space-between" }}>
                          <ProductPrice product={product} />
                          <IconButton onClick={() => handleRemoveFromCart(product)}>
                            <DeleteIcon />
                          </IconButton>
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 100 }}
                      image={product.image}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div className="cart-page-container4">
          <div className="cart-page-container5">
            <div className="cart-page-container6">
              <span className="cart-page-text06">Subtotal</span>
              <span className="cart-page-text07">Taxes</span>
              <span className="cart-page-text08">
                <span>Grand Total</span>
                <br></br>
              </span>
            </div>
            <div className="cart-page-container7">
              <span className="cart-page-text11">
                {totals.subtotal ? `$${totals.subtotal.toFixed(2)}` : "N/A"}
              </span>
              <span className="cart-page-text12">
                {totals.taxes ? `$${totals.taxes.toFixed(2)}` : "N/A"}
              </span>
              <span className="cart-page-text13">
                <span>
                  {totals.total ? `$${totals.total.toFixed(2)}` : "N/A"}
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="cart-page-container8">
            <Link to="/checkout" className="cart-page-navlink button">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
