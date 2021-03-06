import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions'
import './MyOrders.css'

const MyOrders = props => {
  useEffect(() => {
    props.actions.getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  var items = props.productItems.map(item => {
    return (
      <div key={item.ID} className='list-group-item'>
        <div className='order-item-date'>Order Date: {item.PublishDate}</div>

        <div className='order-list-item'>
          <div className='order-item-image'>
            <img
              src='https://dummyimage.com/120x120/000/fff'
              alt='Girl in a jacket'
            />
          </div>
          <div className='order-details-group'>
            <div className='order-item order-item-title'>
              Book Title: {item.Title}
            </div>
            <div className='order-item order-item-Author'>
              Author Name: Sumit
            </div>
            <div className='order-item order-item-price'>
              Book Price: ${item.PageCount}
            </div>
          </div>
        </div>
      </div>
    )
  })
  return (
    <React.Fragment>
      <div className='list-group'>{items}</div>
    </React.Fragment>
  )
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

const mapStateToProps = state => ({
  productItems: state.productItemReducer.productItems
})
MyOrders.propTypes = {
  loading: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrders)
