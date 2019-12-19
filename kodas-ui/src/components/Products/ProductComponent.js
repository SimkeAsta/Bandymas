import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
    card: { width: '18rem' },
    image: { height: '200px' }
}

class ProductComponent extends Component {
    render() {
        return (
            <div className="card" style={styles.card} >
                <img src={this.props.productImage} className="card-img-top" alt={this.props.productTitle} style={styles.image} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.productTitle}</h5>
                    <p className="card-text">{this.props.productDescription}</p>
                    <p className="card-text">{this.props.productPrice} Eur</p>
                    <Link to={`/products/${this.props.productId}`}><button className="btn btn-warning" onClick={this.props.onDetailsClick}>Details</button></Link>
                </div>
            </div>
        );
    }
}

ProductComponent.propTypes = {
    productId: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    productImage: PropTypes.string,
    productDescription: PropTypes.string,
    productPrice: PropTypes.number.isRequired,
    onDetailsClick: PropTypes.func.isRequired
}

export default ProductComponent;