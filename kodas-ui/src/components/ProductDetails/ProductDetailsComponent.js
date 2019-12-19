import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
    card: { width: '18rem' },
    image: { height: '200px' }
}

class ProductDetailsComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <div className="row">
                    <div className="card" style={styles.card} >
                        <img src={this.props.product.productImage} className="card-img-top" alt={this.props.product.productTitle} style={styles.image} />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.product.productTitle}</h5>
                            <p className="card-text">{this.props.product.productDescription}</p>
                            <p className="card-text">{this.props.product.productPrice} Eur</p>
                            <Link to={`/products/${this.props.product.productId}`}><button className="btn btn-warning" onClick={this.props.onAddToCart}>To Cart</button></Link>
                            <Link to="/"><button className="btn btn-warning" onClick={this.props.onBack}>Back</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

ProductDetailsComponent.propTypes = {
    product: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func,
    onBack: PropTypes.func.isRequired,
};

export default ProductDetailsComponent;
