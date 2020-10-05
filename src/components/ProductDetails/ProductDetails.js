import React, { Component } from 'react'
import './ProductDetails.css'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'

class ProductDetails extends Component {
  componentDidMount () {
    let productId = this.props.match.params.ID
    this.props.actions.getProductDetails(productId)
  }
  componentWillUnmount () {
    this.props.actions.clearProductDetails()
  }
  addProductToCart = data => {
    this.props.actions.addItem(data)
  }
  addAndGoToCart = data => {
    this.props.actions.addItem(data)
    this.props.history.push('/cart')
  }
  render () {
    let productDetails = this.props.productDetails
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
                onClick={() => this.addProductToCart(productDetails)}
              >
                Add To Cart
              </button>
              <button
                className='button button-buy'
                onClick={() => this.addAndGoToCart(productDetails)}
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
      return <div>Loading.....</div>
    }
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
