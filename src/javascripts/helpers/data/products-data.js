import axios from 'axios';

const getProductsForTypes = builtCategories => new Promise((resolve, reject) => {
  axios.get('../db/products-data.json')
    .then((response) => {
      const { products } = response.data;

      const extractedProducts = products.map((product) => {
        const productKeys = Array.from(product.keys);
        return product[productKeys[0]];
      });

      const finalBuiltData = builtCategories.map((category) => {
        const finalBuiltCategory = category;

        const builtTypes = category.types.map((type) => {
          const builtType = type;

          const matchingProducts = extractedProducts.filter(product => product.type === type.id);
          builtType.products = matchingProducts;
          return builtType;
        });

        finalBuiltCategory.types = builtTypes;
        return finalBuiltData;
      });

      resolve(finalBuiltData);
    })
    .catch(error => reject(error));
});

export default {
  getProductsForTypes,
};
