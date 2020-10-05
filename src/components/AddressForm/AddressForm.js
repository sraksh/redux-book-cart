import React, { Component } from 'react'
import './AddressForm.css'
import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

class AddressForm extends Component {
  render () {
    return (
      <React.Fragment>
        <h3>Shipping address</h3>
        <form
          id='contact-form'
          className="address-form"
          // onSubmit={this.handleSubmit.bind(this)}
          method='POST'
        >
          <div className='form-group'>
            <label for='name'>Full Name</label>
            <input type='text' id='name' placeholder='Your name..' />
          </div>
          <div className='form-group'>
            <label for='contact'>Contact</label>
            <input type='text' id='contact' placeholder='Contact number' />
          </div>
          <div className='form-group'>
            <div class='col-25'>
              <label for='addressL1'>Address Line 1</label>
            </div>
            <div class='col-75'>
              <input type='text' id='addressL1' />
            </div>
          </div>
          <div className='form-group'>
            <div class='col-25'>
              <label for='addressL2'>Address Line 2</label>
            </div>
            <div class='col-75'>
              <input type='text' id='addressL2' />
            </div>
          </div>
          <div className='form-group'>
            <div class='col-25'>
              <label for='city'>City</label>
            </div>
            <div class='col-75'>
              <input type='text' id='city' />
            </div>
          </div>
          <div className='form-group'>
            <div class='col-25'>
              <label for='state'>State</label>
            </div>
            <div class='col-75'>
              <input type='text' id='state' />
            </div>
          </div>
          <div className='address-button-group'>
            <button className='button button-save'>Save Adress Button</button>
            <button className='button button-edit'>Edit Adress Button</button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

AddressForm.propTypes = {
  cartItems: PropTypes.object
}

export default AddressForm
