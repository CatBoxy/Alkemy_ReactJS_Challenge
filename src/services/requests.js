import axios from 'axios';
import { recipesAPI, authAPI } from '../config/api';

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(recipesAPI);
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