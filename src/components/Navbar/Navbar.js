import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Navbar extends Component {
  render () {
    let productDetails = this.props.productDetails
    return (
      <nav className='navbar'>
        <input type='checkbox' id='show-menu' role='button' />
        <div className='container-fluid'>
          <div className='navbar-left'>
            Ecommerce Site
            {productDetails && (
              <span className='dynamic-title'>{productDetails.Title}</span>
            )}
          </div>
          <div className='navbar-right'>
            <NavLink exact className='navbar-items' to='/'>
              Home
            </NavLink>
            <NavLink exact className='navbar-items' to='/myorder'>
              My Orders
            </NavLink>
            <NavLink exact className='navbar-items' to='/cart'>
              Cart
              <span className='badge-cart-count'>
                {this.props.cartItems.length}
              </span>
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartReducer.cartItems,
  productDetails: state.productItemReducer.productDetails
})

Navbar.propTypes = {
  cartItems: PropTypes.array
}

export default connect(mapStateToProps, null)(Navbar)
