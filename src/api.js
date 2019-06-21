import axios from 'axios';

const URL_API = 'http://localhost:3000';

export default {
  getRecipes() {
    return axios.get(`${URL_API}/recipes`);
  },
  getRecipe(id) {
    return axios.get(`${URL_API}/recipes/${id}`);
  },
};
