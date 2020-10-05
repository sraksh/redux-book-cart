import { GET_PRODUCTS, GET_PRODUCT_DETAILS, ADD_ITEM, CLEAR_PRODUCT_DETAILS } from './action-types';

export const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};

export const getProductDetails = (id) => {
  return {
    type: GET_PRODUCT_DETAILS,
    id
  };
};

export const clearProductDetails = (id) => {
  return {
    type: CLEAR_PRODUCT_DETAILS,
  };
};

export const addItem = (data) => ({
  type: ADD_ITEM,
  data
});
