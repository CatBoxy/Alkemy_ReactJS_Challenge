const apikey = '6b4027884a3a4fa98204a26426d0b6f8';

export const recipesAPI = (query) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&query=${query}&addRecipeInformation=true&number=12`;
  return url;
} ;

export const veganRecipesAPI = (query) => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&query=${query}&addRecipeInformation=true&diet=vegan&number=12`;
  return url;
} ;

export const noQueryRecipesAPI = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&addRecipeInformation=true&number=12`;

export const authAPI = 'https://challenge-react.alkemy.org/';