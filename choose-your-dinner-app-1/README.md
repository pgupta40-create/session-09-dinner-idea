# Choose Your Dinner App

Welcome to the "Choose Your Dinner Ideas" interactive web application! This fun and quirky app is designed to help you discover wild dinner recipes that will make your mealtime exciting and enjoyable.

## Features

- **Interactive Quiz**: Take a fun quiz to find out which quirky dinner recipe suits your mood and preferences.
- **Recipe Cards**: Browse through a collection of unique dinner recipes, each displayed with vibrant images and detailed descriptions.
- **Explore Page**: Dive deeper into various dinner ideas and explore new culinary adventures.
- **Random Recipe Generator**: Get a surprise recipe suggestion with our custom hook that fetches a random recipe from our database.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd choose-your-dinner-app
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Start the development server with:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000` to see the app in action!

## Project Structure

The project is organized as follows:

- `public/index.html`: Main HTML document.
- `src/main.tsx`: Entry point for the React application.
- `src/App.tsx`: Main App component with routing.
- `src/components/`: Contains reusable components like Header, RecipeCard, RecipeList, and Quiz.
- `src/pages/`: Contains page components for Home and Explore.
- `src/styles/main.css`: Main CSS styles for the application.
- `src/data/recipes.ts`: Array of quirky dinner recipes.
- `src/hooks/useRandomRecipe.ts`: Custom hook for fetching random recipes.
- `src/types/index.ts`: TypeScript interfaces and types.

## Contributing

We welcome contributions! If you have ideas for new recipes or features, feel free to submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Enjoy your culinary adventures with "Choose Your Dinner Ideas"!