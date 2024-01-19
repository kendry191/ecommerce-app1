import { IconButton } from "@mui/material"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext } from "react";
import { ProductPriceContext } from "./ProductPriceContext";

export default function AddToCartButton(props) {
    
    const {productsAndSales, addToCart} = useContext(ProductPriceContext);

    return (
        <IconButton onClick={() => addToCart(props.product)} color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
        </IconButton>
    )
}