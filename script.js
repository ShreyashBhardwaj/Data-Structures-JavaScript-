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

const newMenu = [restaurant.mainMenu, 'Gnocci'];
const mainMenuCopy = [...restaurant.mainMenu];

const merge = [...mainMenuCopy, ...newMenu];
console.log(...merge);

// SPREAD OPERATORS WORK ON ALL ITERABLES
// ITERABLES ARE : ARRAYS,STRINGS,SETS, MAPS.

// WILL NOT WORK IN TEMPLATE LITERALS the backticks ``

const ingridients = ['Tomato', 'Garlic', 'Chilli'];
restaurant.orderPasta(...ingridients);
