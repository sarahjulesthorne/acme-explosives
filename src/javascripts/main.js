// module uses init function to call function which starts functionality on page load
import productsDisplay from './components/products/products';
import 'bootstrap';
import '../styles/main.scss';

const init = () => {
  productsDisplay.initProductsDisplay();
};
init();
