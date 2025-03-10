console.log("script is connected")

//Array of recipe objects
const recipes = [
  {
    name: 'Frutti di Mare',
    cuisine: 'Italian',
    time: 30,
    diet: ['pescatarian', 'dairy-free'],
    image: './Images/Italian-frutti-di-mare.jpg',
    ingredients: ['400g Pasta', '500g Black mussels', '300g Shrimps (peeled)','2 Tomatoes', '3 tbs Olive oil', '1 glove Basil leaves (for garnish)']
  },
  {
    name: 'Bucatini with Black Truffle',
    cuisine: 'Italian',
    diet: ['pescatarian', 'dairy-free'],
    time: 30,
    image: './Images/Italian-truffle-spaghetti.jpg',
    ingredients: ['200g Pasta', '1 Black truffle (thinly sliced)', '4 anchovy fillets (minced)', '2 Garlic (gloves)','3 tbs Olive oil','Salt (pinch)']
  },
  {
    name: 'Tapas with Shrimp',
    cuisine: 'Spanish',
    diet: ['pescatarian', 'dairy-free'],
    time: 25,
    image: './Images/Spanish-tapas.jpg',
    ingredients: ['1 Baguette', '2 Dozen shrimps', '1 tbs Fresh cilantro', '2 Red bell peppers (minced)', '3 tbs Olive oil', 'Salt (pinch)']
  },
  {
    name: 'Vegetable Stew',
    cuisine: 'Spanish',
    diet: ['vegetarian', 'dairy-free'],
    time: 40,
    image: './Images/Spanish-vegetable-stew.jpg',
    ingredients: ['6 Potatoes', '500g Flat green beans', '1/2 White Cabbage', '200 ml vegetable broth', '3 tbs Olive oil', 'Salt (pinch)']
  },
  {
    name: 'Greek Salad',
    cuisine: 'Greek',
    diet: ['vegetarian'],
    time: 20,
    image: './Images/Greek-traditional-salad.jpg',
    ingredients: ['1 Cabbage', '2 Tomatoes', ' 1/2 Cucumber', '150g Feta cheese', '1 Red onion', '300g Black olives', '3 tbs Olive oil']
  },
  {
    name: 'Greek Salad with Pomegranate',
    cuisine: 'Greek',
    diet: ['vegetarian'],
    time: 20,
    image: './Images/Greek-salad.jpg',
    ingredients: ['2 Tomatoes', '1/2 Cucumber', '1 Red onion', '1/4 Red cabbage', '1 Pomegranate', '200g Corn']
  }
];
