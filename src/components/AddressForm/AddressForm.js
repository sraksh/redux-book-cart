import React, { Component } from 'react'
import './AddressForm.css'
import PropTypes from 'prop-types'

class AddressForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  }
  render () {
    return (
      <React.Fragment>
        <h3>Shipping address</h3>
        <form
          id='contact-form'
          className="address-form"
          onSubmit={(e) => this.handleSubmit(e)}
          method='POST'
        >
          <div className='form-group'>
            <label htmlFor='name'>Full Name</label>
            <input type='text' id='name' placeholder='Your name..' />
          </div>
          <div className='form-group'>
            <label htmlFor='contact'>Contact</label>
            <input type='text' id='contact' placeholder='Contact number' />
          </div>
          <div className='form-group'>
            <div className='col-25'>
              <label htmlFor='addressL1'>Address Line 1</label>
            </div>
            <div className='col-75'>
              <input type='text' id='addressL1' />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-25'>
              <label htmlFor='addressL2'>Address Line 2</label>
            </div>
            <div className='col-75'>
              <input type='text' id='addressL2' />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-25'>
              <label htmlFor='city'>City</label>
            </div>
            <div className='col-75'>
              <input type='text' id='city' />
            </div>
          </div>
          <div className='form-group'>
            <div className='col-25'>
              <label htmlFor='state'>State</label>
            </div>
            <div className='col-75'>
              <input type='text' id='state' />
            </div>
          </div>
          <div className='address-button-group'>
            <button className='button button-save'>Save Adress</button>
            <button className='button button-edit'>Edit Adress</button>
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
