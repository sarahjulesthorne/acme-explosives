/* This module creates a single function
to perform an axios call to retrieve the initial layer of data.
This function will be exported and called in products.js
to pass in initial array with which to build data to print */
import axios from 'axios';

const getCategories = () => axios.get('../db/categories.json');

export default {
  getCategories,
};
