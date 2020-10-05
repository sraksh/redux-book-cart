import axios from 'axios';
const URL = "https://fakerestapi.azurewebsites.net/api/Books/";

export const fetchProducts = () => axios.get(URL);

export const fetchProductDetails = (id) => axios.get(URL + id);