import { Box, Card, CardMedia, CardActions, CardContent, Typography, Rating, Grid } from '@mui/material';
import AddToCartButton from '../../components/AddToCartButton';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';

import './Sales.css'
import { ProductPriceContext } from '../../components/ProductPriceContext';

const Sales = (props) => {

  const { productsAndSales, addToCart } = useContext(ProductPriceContext);

  const calculateSalePrice = (product) => {
    if(productsAndSales.length === 0){
        return;
    }
    const productAndSale = productsAndSales.find(element => element.item1.name === product.name);
    if (productAndSale.item2.isPercentDiscount) {
        return product.price * (1 - (productAndSale.item2.discount / 100.0));
    } else {
        return product.price - productAndSale.item2.discount;
    }
}

  return <>
    <div className="sales-container">
      <Helmet>
        <title>Sales - 361 Project</title>
        <meta property="og:title" content="Sales - 361 Project" />
      </Helmet>
      <h1 className="sales-text">
        <span>Sales</span>
        <br></br>
      </h1>
      <Grid container spacing={2}>
        {productsAndSales.map((productAndSale, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 500 }}
                image={productAndSale.item1.image}
                title={productAndSale.item1.name}
              />
              <CardContent sx={{ height: 150, overflowY: 'scroll' }}>
                <Typography gutterBottom variant="h5" component="div">
                  {productAndSale.item1.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productAndSale.item1.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <Rating name="half-rating-read" defaultValue={productAndSale.item1.numStars} precision={0.1} readOnly />
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', textDecoration: 'line-through' }}>
                    ${productAndSale.item1.price.toFixed(2)}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', color: "black" }}>
                    ${calculateSalePrice(productAndSale.item1).toFixed(2)}
                  </Typography>
                  <AddToCartButton addToCart={addToCart} product={{ ...productAndSale.item1, isOnSale: true, sale: productAndSale.item2 }} />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  </>
}

export default Sales