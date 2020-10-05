import { combineReducers } from 'redux';

import productItemReducer from './productItemReducer';
import cartReducer from './cartReducer';

let rootReducer = combineReducers({
  productItemReducer,
  cartReducer,
});

export default rootReducer;