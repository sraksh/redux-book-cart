import { ADD_ITEM } from '../actions/action-types'
const initialState = {
  cartItems: []
}

function cartItems (state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      action.data.isAddedToCart = true
      return {
        cartItems: [...state.cartItems, action.data]
      }
    default:
      return state
  }
}

export default cartItems
