import React from 'react';
import RecipeList from '../components/RecipeList';
import Quiz from '../components/Quiz';
import { useRandomRecipe } from '../hooks/useRandomRecipe';
import './Home.css';

const Home: React.FC = () => {
    const randomRecipe = useRandomRecipe();

    return (
        <div className="home">
            <h1>Welcome to the Quirky Dinner Ideas!</h1>
            <p>Feeling adventurous? Let's find your next wild dinner recipe!</p>
            <Quiz />
            <h2>Featured Recipe</h2>
            {randomRecipe && (
                <div className="featured-recipe">
                    <h3>{randomRecipe.title}</h3>
                    <img src={randomRecipe.image} alt={randomRecipe.title} />
                    <p>{randomRecipe.description}</p>
                </div>
            )}
            <h2>Explore More Recipes</h2>
            <RecipeList />
        </div>
    );
};

export default Home;