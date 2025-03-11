console.log("script is connected")

//Array of recipe objects
const recipes = [
  {
    title: 'Frutti di Mare',
    cuisine: 'Italian',
    time: 30,
    servings: 4,
    diet: [
      'pescatarian', 
      'dairy-free'
    ],
    image: './Images/Italian-frutti-di-mare.jpg',
    ingredients: [
      '400g Pasta', 
      '500g Black mussels', 
      '300g Shrimps (peeled)',
      '2 Tomatoes', 
      '3 tbs Olive oil', 
      '1 glove Basil leaves (for garnish)'
    ]
  },
  {
    title: 'Bucatini with Black Truffle',
    cuisine: 'Italian',
    diet: [
      'pescatarian', 
      'dairy-free'
    ],
    time: 30,
    servings: 4,
    image: './Images/Italian-truffle-spaghetti.jpg',
    ingredients: ['400g Pasta', 
      '1 Black truffle (thinly sliced)', 
      '4 anchovy fillets (minced)', 
      '2 Garlic (gloves)',
      '3 tbs Olive oil',
      'Salt (pinch)'
    ]
  },
  {
    title: 'Tapas with Shrimp',
    cuisine: 'Spanish',
    diet: [
      'pescatarian', 
      'dairy-free'
    ],
    time: 25,
    servings: 4,
    image: './Images/Spanish-tapas.jpg',
    ingredients: ['1 Baguette', 
      '2 Dozen shrimps', 
      '1 tbs Fresh cilantro', 
      '2 Red bell peppers (minced)', 
      '3 tbs Olive oil', 
      'Salt (pinch)'
    ]
  },
  {
    title: 'Vegetable Stew',
    cuisine: 'Spanish',
    diet: [
      'vegetarian', 
      'dairy-free'
    ],
    time: 40,
    servings: 6,
    image: './Images/Spanish-vegetable-stew.jpg',
    ingredients: [
      '6 Potatoes', 
      '500g Flat green beans', 
      '1/2 White Cabbage', 
      '200 ml vegetable broth', 
      '3 tbs Olive oil', 
      'Salt (pinch)'
    ]
  },
  {
    title: 'Greek Salad',
    cuisine: 'Greek',
    diet: ['vegetarian'],
    time: 20,
    servings: 2,
    image: './Images/Greek-traditional-salad.jpg',
    ingredients: [
      '1 Cabbage', 
      '2 Tomatoes', 
      '1/2 Cucumber', 
      '150g Feta cheese', 
      '1 Red onion', 
      '300g Black olives', 
      '3 tbs Olive oil'
    ]
  },
  {
    title: 'Greek Salad with Pomegranate',
    cuisine: 'Greek',
    diet: [
      'vegetarian', 
      'dairy-free'
    ],
    time: 20,
    servings: 2,
    image: './Images/Greek-salad.jpg',
    ingredients: [
      '2 Tomatoes', 
      '1/2 Cucumber', 
      '1 Red onion', 
      '1/4 Red cabbage', 
      '1 Pomegranate', 
      '200g Corn'
    ]
  }
];

// Function to display recipes
const listRecipes = (filteredRecipes) => {
  const container = document.querySelector('.recipe-container');
  container.innerHTML = '';

  filteredRecipes.forEach(recipe => {
    container.innerHTML += `
      <div class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <hr>
        <h3>Cuisine: ${recipe.cuisine}</h3>
        <h3>Cooking time: ${recipe.time} minutes</h3>
        <hr>
        <p>Ingredients:</p>
        <ul>
          ${recipe.ingredients.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    `;
  });
}

// Invoking/Calling the function
listRecipes(recipes)

// Event listeners for filters
document.querySelectorAll('.filter-buttons button').forEach(button => {
  button.addEventListener('click', (event) => {
    document.querySelectorAll('.filter-buttons button').forEach(btn => btn.classList.remove('selected')); // Remove 'selected' class from all buttons
    event.target.classList.add('selected'); // Add 'selected' class to the clicked button
    const cuisine = event.target.textContent; // Get the selected cuisine
    if (cuisine === 'All') {
      listRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => recipe.cuisine === cuisine);
      listRecipes(filtered);
    }
  });
});

// Event listeners for sort buttons
document.querySelectorAll('.sort-buttons button').forEach(button => {
  button.addEventListener('click', (event) => {
   // Remove 'selected' class from all sort buttons
   document.querySelectorAll('.sort-buttons button').forEach(btn => btn.classList.remove('selected'));

   // Add 'selected' class to the clicked button
   event.target.classList.add('selected');

   const sortType = event.target.textContent;
   if (sortType === 'Ascending') {
     const filtered = recipes.filter(recipe => recipe.time >= 30);
     listRecipes(filtered);
   } else if (sortType === 'Descending') {
     const filtered = recipes.filter(recipe => recipe.time < 30);
     listRecipes(filtered);
   }
 });
});

// Random recipe button
document.querySelector('.random-button').addEventListener('click', (event) => {
  document.querySelectorAll('button').forEach(btn => btn.classList.remove('selected'));

  // Add 'selected' class to the random button
  event.target.classList.add('selected');

  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
  listRecipes([randomRecipe]);
});
