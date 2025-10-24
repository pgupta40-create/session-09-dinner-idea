import { useState } from 'react';
import { Recipe } from '../types';

const useRandomRecipe = (recipes: Recipe[]) => {
    const [randomRecipe, setRandomRecipe] = useState<Recipe | null>(null);

    const getRandomRecipe = () => {
        if (recipes.length === 0) return;
        const randomIndex = Math.floor(Math.random() * recipes.length);
        setRandomRecipe(recipes[randomIndex]);
    };

    return { randomRecipe, getRandomRecipe };
};

export default useRandomRecipe;