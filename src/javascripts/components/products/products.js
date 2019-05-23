/* module creates domStringBuilder function for printing product cards
Calls that function in function which executes the promises from data functions in helpers
exports promise-executor function to main.js */
import categoriesData from '../../helpers/data/categories-data';
import productsData from '../../helpers/data/products-data';
import typesData from '../../helpers/data/types-data';
import util from '../../helpers/util';

/* used nested forEach methods on designated array
To drill into layers of my data structure
To extract desired data and build it up into productcards
Used print function from util.js to print cards to page */
const printProducts = (arrayToPrint) => {
  let domString = '';
  arrayToPrint.forEach((category) => {
    category.types.forEach((type) => {
      type.products.forEach((product) => {
        domString += `<div class="card col-3 product-card" id="${product.id}">`;
        domString += '<div class="card-body">';
        domString += `<h5 class="card-title w-100 text-center">${product.name}</h5>`;
        domString += `<p class="card-text"><span>Product Description:</span> ${product.description}</p>`;
        domString += `<p class="card-text"><span>Category:</span> ${category.name}</p>`;
        domString += `<p class="card-text"><span>Type:</span> ${type.name}</p>`;
        domString += '</div>';
        domString += '</div>';
      });
    });
  });
  util.printToDom('productsContainer', domString);
};

/* used chained promises to pass in promise function calls
on categories.json, then types.json, then products.json
Passed final built data into final .then on last promise call
Passed it into printProducts function call */
const initProductsDisplay = () => {
  categoriesData.getCategories()
    .then(response => typesData.getTypesForCategories(response.data.categories))
    .then(categoriesWithTypes => productsData.getProductsForTypes(categoriesWithTypes))
    .then((finalBuiltData) => {
      printProducts(finalBuiltData);
    })
    .catch(error => console.error('Error from initProducts request', error));
};

export default {
  initProductsDisplay,
};
