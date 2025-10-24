// This file contains JavaScript code that adds interactivity to the website.

document.addEventListener("DOMContentLoaded", function() {
    const ideasContainer = document.getElementById("dinner-ideas");
    
    fetch("data/ideas.json")
        .then(response => response.json())
        .then(data => {
            displayDinnerIdeas(data);
        })
        .catch(error => {
            console.error("Error fetching dinner ideas:", error);
        });

    function displayDinnerIdeas(ideas) {
        ideas.forEach(idea => {
            const ideaElement = document.createElement("div");
            ideaElement.classList.add("idea");

            const title = document.createElement("h2");
            title.textContent = idea.title;

            const description = document.createElement("p");
            description.textContent = idea.description;

            const ingredients = document.createElement("h3");
            ingredients.textContent = "Ingredients:";

            const ingredientsList = document.createElement("ul");
            idea.ingredients.forEach(ingredient => {
                const listItem = document.createElement("li");
                listItem.textContent = ingredient;
                ingredientsList.appendChild(listItem);
            });

            const preparation = document.createElement("h3");
            preparation.textContent = "Preparation Steps:";

            const preparationSteps = document.createElement("ol");
            idea.preparation.forEach(step => {
                const stepItem = document.createElement("li");
                stepItem.textContent = step;
                preparationSteps.appendChild(stepItem);
            });

            ideaElement.appendChild(title);
            ideaElement.appendChild(description);
            ideaElement.appendChild(ingredients);
            ideaElement.appendChild(ingredientsList);
            ideaElement.appendChild(preparation);
            ideaElement.appendChild(preparationSteps);

            ideasContainer.appendChild(ideaElement);
        });
    }
});