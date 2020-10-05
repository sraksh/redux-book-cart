import React, { Component } from 'react'
import './ProductListItem.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class ProductListItem extends Component {
  
  render () {
    let Id = this.props.product.ID
    return (
      <NavLink
        to={{
          pathname: `/details/${Id}`,
          productId: { Id }
        }}
      >
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{this.props.product.Title}</h5>
            <div className='card-text-des'>
              {this.props.product.Description}
            </div>
            <div className='card-text-price'>
              Price: {this.props.product.PageCount}
            </div>
            <NavLink className='navbar-brand' to='/cart'>
              <button className='card-button'>Buy Now</button>
            </NavLink>
          </div>
        </div>
      </NavLink>
    )
  }
}

ProductListItem.propTypes = {
  product: PropTypes.object,
  actions: PropTypes.object
}

export default ProductListItem
