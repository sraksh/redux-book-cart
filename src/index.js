import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MyOrders from './components/MyOrders/MyOrders';

const wrapper = (
  <Provider store={store}>
    <Router>
    <Navbar />
      <Route exact path="/" component={App} />
      <Route path="/details/:ID" component={ProductDetails} />
      <Route exact path="/myorder" component={MyOrders} />
      <Route exact path="/cart" component={Cart} />
    </Router>
  </Provider>
);
ReactDOM.render(wrapper, document.getElementById('root'));
