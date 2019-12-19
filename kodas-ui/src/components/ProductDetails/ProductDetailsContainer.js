import React, { Component } from 'react';
import ProductDetailsComponent from './ProductDetailsComponent';
import axios from 'axios';

class ProductDetailsContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        console.log(props.match.params.productTitle)
        this.state = {
            product: {
                productImage: '',
                productTitle: '',
                productDescription: '',
                productPrice: 0,
                productQuantity: 0,
            }
        };
    }

    componentDidMount() {
        console.log(this.props)
        axios.get('http://localhost:8080/api/products' + this.props.match.params.productTitle) //pakeisti is kur ima produkta pagal id. arba gal reikia pagal title kad imtu?
            .then((response) => {
                console.log(response)
                this.setState({ product: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleAddToCart = (event) => {
        event.preventDefault();
        axios.post('/api/products/addtocart', //reikia siusti jason objekta
        )
            .then((response) => {
                console.log(response)
                this.setState({ product: response.data });
            });
        // this.props.history.push(`/products/cart-products/` + this.props.match.params.id);
        // console.log(this.props.match.params.id)
    }

    handleBack = (event) => {
        event.preventDefault();
        this.props.history.push(`/`);
    }

    render() {
        return (
            <ProductDetailsComponent
                product={this.state.product}
                onAddToCart={this.handleAddToCart}
                onBack={this.handleBack}
            />
        );
    }
}

export default ProductDetailsContainer;
