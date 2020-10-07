import React, { useEffect } from 'react'
import './ProductList.css'
import ProductListItem from '../ProductListItem/ProductListItem.js'
import PropTypes from 'prop-types'

const ProductList = props => {
  useEffect(() => {
    props.actions.getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  if (props.productItems.length) {
    var productItems = props.productItems.map(item => {
      return <ProductListItem {...props} product={item} key={item.ID} />
    })
    return <div className='products-container'>{productItems}</div>
  } else {
    return <React.Fragment>Loading..... </React.Fragment>
  }
}

ProductList.propTypes = {
  productItems: PropTypes.array,
  actions: PropTypes.object
}

export default ProductList
