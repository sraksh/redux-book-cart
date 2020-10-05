import React, { Component } from 'react';
import ProductList from './components/ProductList/ProductList.js';
import Loader from './components/Loader/Loader';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

import './App.css';

const mapStateToProps = state => ({
  productItems: state.productItemReducer.productItems,
  loading: state.productItemReducer.loading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="shopping-cart-container">
          <Loader {...this.props}/>
          <ProductList {...this.props}/>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
