import React from 'react';
import RecipeList from '../components/RecipeList';
import { recipes } from '../data/recipes';

const Explore: React.FC = () => {
    return (
        <div className="explore-page">
            <h1>Explore Quirky Dinner Ideas!</h1>
            <p>Get ready to dive into a world of wild and fun dinner recipes!</p>
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default Explore;