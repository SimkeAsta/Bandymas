import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UpdateProductFormComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <form onSubmit={this.props.onSave}>
                    <div className="form-row">
                        <div className="col-md-4 mb-3">
                            <label>Title</label>
                            <input type="text" name="title" className="form-control" value={this.props.product.title} id="validationDefault01" placeholder="Title" onChange={this.props.onChange} required />
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Image URL</label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon3">https://picsum.photos/</span>
                                </div>
                                <input type="text" name="image" value={this.props.product.image} className="form-control" id="basic-url" onChange={this.props.onChange} />
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label>Description</label>
                            <div className="input-group">
                                <input type="text" name="description" value={this.props.product.description} className="form-control" id="validationDefault03" placeholder="Some info about the product" required onChange={this.props.onChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2 offset-md-4 mb-3">
                            <label>Price</label>
                            <input type="text" name="price" value={this.props.product.price} className="form-control" id="validationDefault03" placeholder="Price" required onChange={this.props.onChange} />
                        </div>
                        <div className="col-md-2 mb-3">
                            <label>Quantity</label>
                            <input type="text" name="quantity" value={this.props.product.quantity} className="form-control" id="validationDefault04" placeholder="Quantity" onChange={this.props.onChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-2 offset-md-4 mb-3">
                            <button className="btn btn-warning" type="submit" value="Submit">Save</button>
                        </div>
                        <div className="col-md-2 offset-md-4 mb-3">
                            <button className="btn btn-warning" type="submit" value="Submit">Back</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

UpdateProductFormComponent.propTypes = {
    product: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    onSave: PropTypes.func,
};

export default UpdateProductFormComponent;