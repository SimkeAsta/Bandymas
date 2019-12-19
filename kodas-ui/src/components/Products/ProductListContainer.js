import React, { Component } from 'react';
import ProductList from './ProductList';
import axios from 'axios';

class ProductListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/products")
            .then((response) => {
                console.log(response)
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleDetailsClick = (event, productId) => {
        console.log(productId)
        event.preventDefault();
        this.props.history.push(`/products/` + productId); // gal ir cia details pagal title turetu rodyt, o ne pagal id?
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <ProductList
                        products={this.state.products}
                        onDetailsClick={this.handleDetailsClick}
                    />
                </div>
            </div>
        );
    }
};

export default ProductListContainer;