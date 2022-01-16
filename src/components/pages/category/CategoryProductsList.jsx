import {ProductCard} from "../../product/productCard/ProductCard";

export function CategoryProductsList(props) {
    const {products} = props;

    return <div className='product-list'>
        {
            products.map(product =>
            <ProductCard product={product}/>)
        }
    </div>
}