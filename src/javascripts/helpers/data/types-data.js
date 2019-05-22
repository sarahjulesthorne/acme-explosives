// module holds notated promise for use in products.js
import axios from 'axios';

/* Function uses axios call within new Promise constructor to retrieve data from types.json
Mapped in over categories parameter to build up new array
Filtered types data to retrieve sets of types whose category keys' values
match the currently iterated category's id
assigned new key on each category to hold matched types array
built array of newly constructed category objects
used resolve to return that array for use when function call is passed in in products.js */
const getTypesForCategories = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((response) => {
      const { types } = response.data;
      const categoriesWithTypes = categories.map((category) => {
        const builtCategory = category;
        const matchingTypes = types.filter(type => type.category === category.id);
        builtCategory.types = matchingTypes;
        return builtCategory;
      });
      resolve(categoriesWithTypes);
    })
    .catch(error => reject(error));
});

export default {
  getTypesForCategories,
};
