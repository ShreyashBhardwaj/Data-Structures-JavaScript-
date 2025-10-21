'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} has been received and will be delivered on ${time} and at location: ${address}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your Pasta made with ${ing1}, ${ing2}, ${ing3} and with LOVE`
    );
  },

  orderPizza: function (mainIngridient, ...otherIngridients) {
    console.log(mainIngridient, otherIngridients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/* 
 *************************************************************
                OBJECT DESTRUCTURING
 *************************************************************
*/

// WE CAN SEND AN OBJECT INTO A FUNCTION AND IN THE PARAMETER LIST WE CAN PERFOMR DESTRUCTURING

restaurant.orderDelivery({
  starterIndex: 1,
  mainIndex: 2,
  time: '9-5',
  address: 'Bengaluru',
});

// TO DESTRUCTURE AN OBJECT YOU USE THE {} AND ADD THE VARIABLES IN IT BUT THE VARIABLES WILL HAVE TO BE THE SAME AS THE
// PROPERTY NAME

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// TO ENSURE THAT THE NAME IS DIFFERENT FROM THE PROPERTY NAME THEN

/* So in this it must be like

  const {propertyName1:variableName1,propertyName2:variableName2,propertyName3:variableName3...} = objectName;
*/

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// To set default values

// const {
//   name: restaurantName = 'Shreyash',
//   openingHours: hours = '2-4',
//   mainMenu: menu = 'PIZZA',
// } = restaurant;

// console.log(restaurantName, hours, menu);

// // Mutating Variables

// let a = 111;
// let b = 222;
// const obj = { a: 23, b: 34, c: 56 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Object

// const {
//   openingHours: {
//     fri: { open, close },
//   },
// } = restaurant;
// console.log(open, close);

/*
 *************************************************************
                  ARRAY DESTRUCTURING
 *************************************************************
 */

// const arr = [1, 2, 3, 4];
// const [x, y, z] = arr; // When applying the [] to a let or const it is called destructuring that
// // is it unpacks the value stored in the array
// let [a, , c] = arr; // skipping one does not cause any problem
// console.log(x, y, z);
// // console.log(a, c);

// // Destructuring is very useful for swapping items
// console.log(a, c);
// [a, c] = [c, a];
// console.log(a, c);
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); // This is very helpful if we need to access 2 variables from a function that returns an array

// // Also can be used for nested items
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested; // Trying to access the inner nested values that is creating nesting destructuring
// console.log(i, j, k);

// // Also can place default values if we do not know the exact values that the array has

// const [p = 1, q = 1, r = 1] = [100, 59];
// console.log(p, q, r);

// // Assignment 1,2,3
// const books = ['Harry Potter', 'Lord Of the Rings', 'Percy Jackson'];
// const [firstBook, secondBook] = books;
// const [, , thirdBook] = books;
// console.log(firstBook, secondBook, thirdBook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(`Rating = ${rating}, RatingCount = ${ratingsCount}`);

// const ratingStars = [63405, 1808];
// const [oneStarRating = 0, twoStarRating = 0, threeStarRating = 0] = ratingStars;
// console.log(oneStarRating, twoStarRating, threeStarRating);

/*
 *************************************************************
                 SPREAD OPERATOR ...
 *************************************************************
 */

// So when it is to the right of the assignment opearator '=' then it is spread

const newMenu = [restaurant.mainMenu, 'Gnocci'];
const mainMenuCopy = [...restaurant.mainMenu];

const merge = [...mainMenuCopy, ...newMenu];
console.log(...merge);

// SPREAD OPERATORS WORK ON ALL ITERABLES
// ITERABLES ARE : ARRAYS,STRINGS,SETS, MAPS.

// WILL NOT WORK IN TEMPLATE LITERALS the backticks ``

const ingridients = ['Tomato', 'Garlic', 'Chilli'];
restaurant.orderPasta(...ingridients);

/*
 *************************************************************
                 REST OPERATOR ...
 *************************************************************
 */

//  So when it is to the left of the assignment operator then it happens it store multiple iterators to a single variable
// Has to be  the last element & can never be more than one REST Variable

// const [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

const {
  openingHours: { sat: Saturday },
  ...others
} = restaurant;

console.log(Saturday, others);

/*
 *************************************************************
                 Short Circutining
  
SHORT CIRCUITING is when the Boolean Operator is applied on non boolean values then the Operator
will return the first Truthy value 

*************************************************************
 

/*                 
                      OR || Operator
*/

// console.log(
//   `---------------------Or Operator SHort Circuit----------------------`
// );

// "||" Operator can work with any datatype so it will not always return boolean values if the values given are not boolean in nature
//  When short circuit is applied using || then it will always shortcircuit for truthy values
// console.log(3 || 'HELLO');
// console.log('' || 'HELLO');
// console.log(true || 0);
// console.log(undefined || null);

// Another Use case is to bypass ternary operators
// Error 1 : Problem is that it will not help if the resteraunt.numGuests give 0 as then it will always give the value as 10

// // restaurant.numGuests =23;

// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

/*                 
                      AND && Operator
*/

// console.log(
//   `---------------------AND Operator SHort Circuit----------------------`
// );
// console.log(3 && 'HELLO');
// console.log('' && 'HELLO');
// console.log(true && 0);
// console.log(undefined && null);

// Another Use case is to bypass ternary operators
// Error 2 : Problem is that it will not help if the resteraunt.numGuests give 0 as then it will always give the value as 10

// restaurant.numGuests =23;

// const guests3 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// const guests4 = restaurant.numGuests && 10;
// console.log(guests2);
//  When short circuit is applied using && then it will always shortcircuit for falsy values

// So as to ensure this error 1 & 2 does not happen we use

//Null Coalescing Opearator ??

// It works on using nullish values like null and undefined

// restaurant.numGuests = 0;

// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// const guests2 = restaurant.numGuests ?? 10;
// console.log(guests2);

// OR Assignment Operator works similarly to Or Operator Short Circuit

const rest1 = {
  numGuests: 0,
};

// console.log('Before OR Assigment Operator', rest1.numGuests);
// rest1.numGuests ||= 10;
// console.log('Using OR Assigment Operator', rest1.numGuests);

//But leads to same problem which can be solved via nullish assignment operator

// console.log('Before OR Assigment Operator', rest1.numGuests);
// rest1.numGuests ??= 10;
// console.log('Using OR Assigment Operator', rest1.numGuests);

//
//
//
//

/* ******************************************************************* 
                      Challenge
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

console.warn('CHALLENGE BEGINS');

const [players1, players2] = game.players;
console.log('step 1', players1, players2);

const [gkForPlayers1, ...fieldPlayersForPlayers1] = [...players1];
console.log('Step 2', gkForPlayers1, fieldPlayersForPlayers1);

const [...allplayers] = [...players1, ...players2];
console.log('step3', allplayers);

const [...players1Final] = [...players1, 'Tihago', 'Coutinho', 'Persic'];
console.log('step4', players1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(`Step 5`, team1, draw, team2);

console.warn(`Step 6`);
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log('No of Goals Scored:', players.length);
};

printGoals(...game.scored);

console.warn('Step 7');
team1 < team2 && console.log('Team 1 is winning');
team1 > team2 && console.log('Team 2 is winning');

console.error(`FOR OF Loop`);
