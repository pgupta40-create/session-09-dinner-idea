import React from 'react';

interface RecipeCardProps {
    title: string;
    image: string;
    description: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, image, description }) => {
    return (
        <div className="recipe-card">
            <img src={image} alt={title} className="recipe-image" />
            <h3 className="recipe-title">{title}</h3>
            <p className="recipe-description">{description}</p>
        </div>
    );
};

export default RecipeCard;