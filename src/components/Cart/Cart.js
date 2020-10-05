import React, { Component } from 'react'
import './Cart.css'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddressForm from '../AddressForm/AddressForm'

class Cart extends Component {
  UNSAFE_componentWillMount () {}

  render () {
    var total = this.props.cartItems.reduce((a, b) => {
      return a + b.PageCount
    }, 0)

    var items = this.props.cartItems.map(item => {
      return (
        <li key={item.ID} className='cart-list-item'>
          <div className='cart-item-title'>{item.Title}</div>
          <div className='cart-item-price'>${item.PageCount}</div>
        </li>
      )
    })

    var emptyBlock = <div className='alert alert-info'>Cart is empty</div>

    var itemsList = <ul className='list-group list-group-flush'>{items}</ul>

    return (
      <div className='cart-summary-container'>
        <div className='address-section'>
          <AddressForm />
        </div>
        <div className='cart-section'>
          <h3 className='card-summary'>Shopping Bag</h3>
          {this.props.cartItems.length ? itemsList : emptyBlock}
          {this.props.cartItems.length ? (
            <div className='payment-container'>
              <h3>Payment Info</h3>
              <div className='cart-tax-group'>
                <div className='cart__total__text'>Tax:</div>
                <div className='cart__total__text'>0</div>
              </div>
              <div className='cart-total-group'>
                <div className='cart-total-text'>Total:</div>
                <div className='cart-total-amount'>${total}</div>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cartReducer.cartItems
})

Cart.propTypes = {
  cartItems: PropTypes.array
}

export default connect(mapStateToProps, null)(Cart)
