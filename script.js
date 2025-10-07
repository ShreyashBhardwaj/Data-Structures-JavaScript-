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

const arr = [1, 2, 3, 4];
const [x, y, z] = arr; // When applying the [] to a let or const it is called destructuring that
// is it unpacks the value stored in the array
let [a, , c] = arr; // skipping one does not cause any problem
console.log(x, y, z);
// console.log(a, c);

// Destructuring is very useful for swapping items
console.log(a, c);
[a, c] = [c, a];
console.log(a, c);
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // This is very helpful if we need to access 2 variables from a function that returns an array

// Also can be used for nested items
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested; // Trying to access the inner nested values that is creating nesting destructuring
console.log(i, j, k);

// Also can place default values if we do not know the exact values that the array has

const [p = 1, q = 1, r = 1] = [100, 59];
console.log(p, q, r);

// Assignment 1,2,3
const books = ['Harry Potter', 'Lord Of the Rings', 'Percy Jackson'];
const [firstBook, secondBook] = books;
const [, , thirdBook] = books;
console.log(firstBook, secondBook, thirdBook);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(`Rating = ${rating}, RatingCount = ${ratingsCount}`);

const ratingStars = [63405, 1808];
const [oneStarRating = 0, twoStarRating = 0, threeStarRating = 0] = ratingStars;
console.log(oneStarRating, twoStarRating, threeStarRating);
