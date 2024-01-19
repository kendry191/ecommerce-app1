import { Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ProductPriceContext } from "./ProductPriceContext";

const ProductPrice = (props) => {

    const { productsAndSales, addToCart } = useContext(ProductPriceContext);
    const [salePrice, setSalePrice] = useState();

    const calculateSalePrice = (product) => {
        if (productsAndSales.length === 0) {
            return;
        }
        const productAndSale = productsAndSales.find(element => element.item1.name === product.name);
        const price = productAndSale.item1.price;
        const isPercentDiscount = productAndSale.item2.isPercentDiscount;
        const discount = productAndSale.item2.discount;

        var url = `http://localhost:5257/apply-sale?price=${price}&isPercentDiscount=${isPercentDiscount}&discount=${discount}`;
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => setSalePrice(result))
            .catch(error => console.log('error'));

        return salePrice;
    }

    return (
        <div>
            {props.product.saleId != null ? (
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', textDecoration: 'line-through' }}>
                        ${props.product.price.toFixed(2)}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ paddingLeft: '5px', fontWeight: '700', color: "black" }}>
                        ${calculateSalePrice(props.product)?.toFixed(2)}
                    </Typography>
                </div>
            ) : (
                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: '700', color: "black" }}>
                    ${props.product.price.toFixed(2)}
                </Typography>
            )}
        </div>
    );


}

export default ProductPrice;