import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Navigation from './components/Navigation/navigation';
import ProductListContainer from './components/Products/ProductListContainer';
import ProductDetailsContainer from './components/ProductDetails/ProductDetailsContainer';
import ProductAdminContainer from './components/Admin/ProductAdminContainer';
import AddNewProductContainer from './components/Admin/AddNewProductContainer';
import UpdateProductContainer from './components/Admin/UpdateProductContainer';

ReactDOM.render(
    <BrowserRouter>
        <Navigation />
        <Route exact path="/" component={ProductListContainer} />
        <Route exact path="/products/:productId" component={ProductDetailsContainer} />
        <Route exact path="/admin/" component={ProductAdminContainer} />
        <Route exact path="/admin/add" component={AddNewProductContainer} />
        <Route exact path="/admin/:productId" component={UpdateProductContainer} />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
