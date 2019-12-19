import React, { Component } from 'react';
import ProductAdminList from './ProductAdminList';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductAdminContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/products')
            .then((response) => {
                console.log(response)
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    handleCheckDetails = (event, productId) => {
        console.log(productId)
        event.preventDefault();
        this.props.history.push(`/admin/` + productId);
    }


    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Update your product</th>
                        </tr>
                    </thead>
                </table>
                <ProductAdminList
                    products={this.state.products}
                    onCheckDetails={this.handleCheckDetails}
                />

                <Link to="/admin/add"><button type="button" className="btn btn-light" onClick={this.props.onAddNew}>Add new product</button></Link>
                <Link to="/"><button type="button" className="btn btn-light" onClick={this.props.onBack}>Go back</button></Link>
            </div>
        );
    }
};

export default ProductAdminContainer;