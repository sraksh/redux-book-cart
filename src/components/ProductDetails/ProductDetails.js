import React, { useEffect } from 'react'
import './ProductDetails.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

const ProductDetails = props => {
  useEffect(() => {
    props.actions.getProductDetails(props.match.params.ID)
    return () => {
      props.actions.clearProductDetails()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addProductToCart = data => {
    props.actions.addItem(data)
  }

  const addAndGoToCart = data => {
    props.actions.addItem(data)
    props.history.push('/cart')
  }

  let productDetails = props.productDetails
  if (productDetails) {
    return (
      <div className='product-details-container'>
        <div className='product-details-image'>
          <img
            src='https://dummyimage.com/600x400/000/fff'
            alt='Girl in a jacket'
          />
        </div>
        <div className='product-details-description'>
          <div>
            <div className='product-details-description'>
              Book Title: {productDetails.Title}
            </div>
            <div className='product-details-description'>
              Book price: {productDetails.PageCount}
            </div>
            <div className='product-details-description'>
              Page count: {productDetails.PageCount}
            </div>
          </div>
          <div>
            <button
              className='button button-add'
              onClick={() => addProductToCart(productDetails)}
            >
              Add To Cart
            </button>
            <button
              className='button button-buy'
              onClick={() => addAndGoToCart(productDetails)}
            >
              Buy Now
            </button>
          </div>
          <div className='product-details-description product-details-description-text'>
            Description: {productDetails.Excerpt}
          </div>
        </div>
      </div>
    )
  } else {
    return <React.Fragment>Loading..... </React.Fragment>
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const mapStateToProps = state => ({
  productDetails: state.productItemReducer.productDetails,
  loading: state.productItemReducer.loading
})

ProductDetails.propTypes = {
  productDetails: PropTypes.object,
  actions: PropTypes.object
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
