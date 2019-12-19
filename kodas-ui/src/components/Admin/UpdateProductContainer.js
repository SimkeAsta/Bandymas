import React, { Component } from 'react';
import axios from 'axios';
import UpdateProductFormComponent from './UpdateProductFormComponent';

class UpdateProductContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                title: this.props.title,
                image: this.props.image,
                description: this.props.description,
                price: this.props.price,
                quantity: this.props.quantity
            }
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }


    handleSave = (event) => {
        let duomenys = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            price: this.state.price,
            quantity: this.state.quantity,
        }
        axios
            .post("http://localhost:8080/api/products/" + this.state.title, duomenys)
            .then((response) => {
                console.log("post ok");
                // axios
                //     .get("http://localhost:8080/")
                //     .then((response) => {
                //         this.setState({
                //             product: response.data
                //         });
                //     })
                //     .catch((error) => {
                //         console.log(error);
                //     })
            })
            .catch((error) => {
                console.log(error);
            })
        event.preventDefault();
    }

    render() {
        return (
            <UpdateProductFormComponent
                product={this.state.product}
                onChange={this.handleChange}
                onSave={this.handleSave} />
        )
    }
}

export default UpdateProductContainer;