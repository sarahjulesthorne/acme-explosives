import categoriesData from './helpers/data/categories-data';
import productsData from './helpers/data/products-data';
import typesData from './helpers/data/types-data';
import util from './helpers/util';
import 'bootstrap';
import '../styles/main.scss';

const testPromises = () => new Promise((resolve, reject) => {
  categoriesData.getCategories()
    .then(response => typesData.getTypesForCategories(response.data.categories)
      .then(categoriesWithTypes => productsData.getProductsForTypes(categoriesWithTypes)
        .then((finalBuiltData) => {
          util.printToDom('app', finalBuiltData);
        })))
    .catch(error => reject(error));
});

const init = () => {
  testPromises();
};
init();
