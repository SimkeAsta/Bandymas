import React from 'react';
import PropTypes from 'prop-types';
import ProductComponent from './ProductComponent';

var ProductList = (props) => {
    var product = props.products.map((product, index) => {
        // console.log(product.id)
        return (
            <ProductComponent
                key={index}
                productId={product.productId}
                productImage={product.productImage}
                productTitle={product.productTitle}
                productDescription={product.productDescription}
                productPrice={product.productPrice}
                onDetailsClick={(event) => props.onDetailsClick(event, product.productId)}
            />
        );
    });
    return (<div className="row">{product}</div>);
};

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    onDetailsClick: PropTypes.func.isRequired,
};

export default ProductList;
