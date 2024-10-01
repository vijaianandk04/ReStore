import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface props{
    products: Product[];    
}

export default function ProductList({products}: props) {    
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item xs={3} key={product.id}>
                    <ProductCard product={product}/>   
                </Grid>
            ))}
        </Grid>
    )
}