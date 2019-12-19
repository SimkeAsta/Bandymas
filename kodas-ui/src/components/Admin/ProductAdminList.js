import React from 'react';
import PropTypes from 'prop-types';
import ProductAdminComponent from './ProductAdminComponent';

var ProductAdminList = (props) => {
    var product = props.products.map((product, index) => {
        // console.log(product.id)
        return (
            <ProductAdminComponent
                key={index}
                productId={product.productId}
                productImage={product.productImage}
                productTitle={product.productTitle}
                productDescription={product.productDescription}
                productPrice={product.productPrice}
                onCheckDetails={(event) => props.onCheckDetails(event, product.productTitle)}
            />
        );
    });
    return (<div className="row">{product}</div>);
};

ProductAdminList.propTypes = {
    products: PropTypes.array.isRequired,
    onCheckDetails: PropTypes.func.isRequired,
};

export default ProductAdminList;
