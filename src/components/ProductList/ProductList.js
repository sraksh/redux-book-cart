import React, { Component } from 'react';
import './ProductList.css';
import ProductListItem from '../ProductListItem/ProductListItem.js';
import PropTypes from 'prop-types';

class ProductList extends Component {

  componentDidMount () {
    this.props.actions.getProducts();
  }

  render () {
    if (this.props.productItems.length) {
      var productItems = this.props.productItems.map(item => {
        return (
          <ProductListItem {...this.props} product={item} key={item.ID} />
        );
      });
      return <div className='products-container'>{productItems}</div>;
    } else {
      return <div>Loading.....</div>;
    }
  }
}

ProductList.propTypes = {
  productItems: PropTypes.array,
  actions: PropTypes.object
};

export default ProductList;
