// module creates promise to build data for use in products.js
import axios from 'axios';

/* Function performs axios call on products.json to retrieve products data
Uses destructuring to assign retrieved data to variable products
Uses Object.values() to extract values of first object in products array
Maps over passed in builtCategories parameter as first step to building final resolved array
Nested maps over types property of builtCategories
Filters products in extractedProducts for objects whose type property
matches the builtTypes currently iterated id
Assigns matched products to new property on final type object
assigns newly built type to final built category
Resolves fully built data for use in products.js */
const getProductsForTypes = builtCategories => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((response) => {
      const { products } = response.data;

      const extractedProducts = Object.values(products[0]);
      const finalBuiltData = builtCategories.map((category) => {
        const finalBuiltCategory = category;
        const builtTypes = category.types.map((type) => {
          const builtType = type;

          const matchingProducts = extractedProducts.filter(product => product.type === type.id);
          builtType.products = matchingProducts;
          return builtType;
        });

        finalBuiltCategory.types = builtTypes;
        return finalBuiltCategory;
      });

      resolve(finalBuiltData);
    })
    .catch(error => reject(error));
});

export default {
  getProductsForTypes,
};
