import {
  GET_PRODUCTS,
  FETCH_PRODUCTS,
  GET_PRODUCT_DETAILS,
  FETCH_PRODUCT_DETAILS,
  CLEAR_PRODUCT_DETAILS
} from '../actions/action-types'

let initialState = {
  productItems: [],
  productDetails: null,
  loading: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, loading: true }
    case GET_PRODUCT_DETAILS:
      return { ...state, loading: true }
    case FETCH_PRODUCTS:
      return {
        ...state,
        productItems: action.payload.data,
        loading: false
      }
    case FETCH_PRODUCT_DETAILS:
      let data = action.res.data
      return {
        ...state,
        productDetails: data,
        loading: false
      }
    case CLEAR_PRODUCT_DETAILS:
      return {
        ...state,
        productDetails: null
      }
    default:
      return state
  }
}
