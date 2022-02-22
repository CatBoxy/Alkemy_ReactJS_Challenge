import axios from 'axios';
import { recipesAPI, authAPI, veganRecipesAPI, noQueryRecipesAPI } from '../config/api';

export const fetchDishes = async (values) => {
  try {
    if (values.vegan) {
      const url = veganRecipesAPI(values.dish);
      const response = await axios.get(url);
      const veganRecipes = response.data.results;
      return veganRecipes;
    }

    const url = recipesAPI(values.dish);
    const response = await axios.get(url);
    const recipes = response.data.results;
    return recipes;

  }
  catch (error) {
    console.log(error);
  }
};

export const fetchNoQueryDishes = async () => {
  try {
    const response = await axios.get(noQueryRecipesAPI);
    const recipes = response.data.results;
    return recipes;
  }
  catch (error) {
    console.log(error);
  }
};

export const fetchToken = async (values) => {
  try {
    const userData = { ...values };
    const response = await axios.post(authAPI, userData);
    const userToken = response.data;
    return userToken;
  }
  catch (error) {
    return error;
  }
};