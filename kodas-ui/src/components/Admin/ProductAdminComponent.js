import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
    card: { width: '18rem' },
    image: { height: '200px' }
}

class ProductAdminComponent extends Component {
    render() {
        return (
            <div className="container">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="row">{this.props.productId}</th>
                            <td>{this.props.productTitle}</td>
                            <td>{this.props.productImage}</td>
                            <td>{this.props.productPrice}</td>
                            <td><Link to={`/admin/${this.props.produstId}`}><button type="button" className="btn btn-light" onClick={this.props.onCheckDetails}>Check And update</button></Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

ProductAdminComponent.propTypes = {
    productId: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    productImage: PropTypes.string,
    productDescription: PropTypes.string,
    productPrice: PropTypes.number.isRequired,
    onCheckDetails: PropTypes.func.isRequired
}

export default ProductAdminComponent;