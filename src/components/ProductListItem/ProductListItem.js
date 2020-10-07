import React from 'react'
import './ProductListItem.css'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const ProductListItem = ({product}) => {
    let Id = product.ID
    return (
      <NavLink
        to={{
          pathname: `/details/${Id}`,
          productId: { Id }
        }}
      >
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>{product.Title}</h5>
            <div className='card-text-des'>
              {product.Description}
            </div>
            <div className='card-text-price'>
              Price: {product.PageCount}
            </div>
            <NavLink className='navbar-brand' to='/cart'>
              <button className='card-button'>Buy Now</button>
            </NavLink>
          </div>
        </div>
      </NavLink>
    )
}

ProductListItem.propTypes = {
  product: PropTypes.object,
  actions: PropTypes.object
}

export default ProductListItem
