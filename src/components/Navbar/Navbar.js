import React, { useLocation } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Navbar = props => {
  const productDetails = props.productDetails
  const getSubtitle = () => {
    return (
      <React.Fragment>
        {productDetails && (
          <span className='dynamic-title'>{productDetails.Title}</span>
        )}
        {props.location.pathname === '/myorder' && (
          <span className='dynamic-title'>My Orders</span>
        )}
        {props.location.pathname === '/cart' && (
          <span className='dynamic-title'>Cart</span>
        )}
      </React.Fragment>
    )
  }
  return (
    <nav className='navbar'>
      <input type='checkbox' id='show-menu' role='button' />
      <div className='container-fluid'>
        <div className='navbar-left'>
          <Link exact to='/'>
            Ecommerce Site
          </Link>
          {getSubtitle()}
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
            <span className='badge-cart-count'>{props.cartItems.length}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cartReducer.cartItems,
  productDetails: state.productItemReducer.productDetails
})

Navbar.propTypes = {
  cartItems: PropTypes.array
}

export default connect(mapStateToProps, null)(Navbar)
