import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <h1>Choose Your Dinner Ideas!</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/explore">Explore Recipes</a></li>
                    <li><a href="/quiz">Take the Quiz!</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;