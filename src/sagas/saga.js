import { put, takeLatest, all, call } from 'redux-saga/effects';
import {fetchProducts, fetchProductDetails} from '../services/api';

function* fetchProductsSaga() {
  const res = yield call(fetchProducts);
  yield put({
    type: 'FETCH_PRODUCTS',
    payload: res
  });
}

function* fetchProductDetailsSaga(action) {
  const res = yield call(fetchProductDetails, action.id);
  yield put({
    type: 'FETCH_PRODUCT_DETAILS',
    res
  });
}

function* watchGetProducts() {
  yield takeLatest('GET_PRODUCTS', fetchProductsSaga);
}

function* watchGetProductDetails() {
  yield takeLatest('GET_PRODUCT_DETAILS', fetchProductDetailsSaga);
}

export default function* rootSaga() {
  yield all([
    watchGetProducts(),
    watchGetProductDetails(),
  ]);
}