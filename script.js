'use strict';

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
  ********************************************************************/
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

//              CHALLENGE 2

// ANSWER 1
for (const [index, value] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${value}`);
}

// ANSWER 2
const odds = Object.values(game.odds);

// const averageOdd =
//   odds.reduce((accumulator, current) => accumulator + current, 0) / odds.length;

const averageOdd = odds.reduce((acc, c) => {
  const avg = c == odds[odds.length - 1] ? (acc + c) / odds.length : acc + c;
  return avg;
}, 0);

console.log('Average:', averageOdd);

// ANSWER 3

for (const [key, value] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${
      key == 'x' ? `draw : ${draw}` : `victory ${game[key]} : ${value}`
    }`
  );
}

// Bonus ANSWER

const score = {};
for (const player of game.scored) {
  score[player] ? score[player]++ : (score[player] = 1);
}

//              CHALLENGE 3
console.warn('CHALLENGE 3');
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// ANSWER 1

const events = [...new Set(gameEvents.values())];

console.log('Answer 1', events);

// ANSWER 2

gameEvents.delete(64);
console.log('Answer 2', gameEvents);

// ANSWER 3

console.log(`An event has happened on average every ${gameEvents.size / 90}`);
// ANSWER 4
console.error('ANSWER $');
for (const [key, value] of gameEvents)
  console.log(`${key < 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${key}:${value}`);

/* ******************************************************************* 
                      For Of Loop
  ********************************************************************/

// console.error(`FOR OF Loop`);

// const array = [`Hello`, `Darkness`, `my`, `old`, `friends`];
// for (const arrItem of array) console.log(arrItem);

// So For Of Loop by itself does not showcase the index. To see the index we have to

// for (const arr of array.entries()) console.log(arr);

// The above statement will showcase the index and the item in an array fashion. Ex: [index0, arrayItem],[index1, arrayItem]

/* ******************************************************************* 
                      Enhancement to Object Literals
  ********************************************************************/

// const resteraunt2 = {
//   name: 'Cooking Mama',
//   hours: {
//     mon: '7-9',
//     tue: '7-9',
//     wed: '7-9',
//     thur: '7-9',
//     fri: '7-9',
//   },
//   menu: 'Everything',
// };

// The above is an object literal

//Enhancement 1 is that instead of just creating nested objects as in the hour we can just make 2 separate
// objects and reference it in the other object. Note: the referenced object and object must have the same name as given below

// const hours = {
//   mon: '7-9',
//   tue: '7-9',
//   wed: '7-9',
//   thur: '7-9',
//   fri: '7-9',
// };

// const resteraunt2 = {
//   name: 'Cooking Mama',
//   hours,
//   menu: 'Everything',
// };

// Enhancement 2: Earlier we typed a property and then assigned a function to it now we dont have to

// const game1 = {
//   gameOn: function () {
//     //property: function
//     console.log('Game On');
//   },
// };

// const gameEnhanced = {
//   gameOn() {
//     console.log('Game On');
//   },
// };

/* 
  Enhancement 3 is just that we can instead of creating properties take the properties from an array destructure 
  it or just take a specific value enclosed in the [] that will specify as a property 
*/

// const weekdays = ['mon', 'tues', 'wed', 'thr', 'fri', 'sat', 'sun'];
// const open = {
//   [weekdays[1]]: console.log('Tuesday'),
//   [weekdays[3]]: console.log('Thursday'),
//   [`${weekdays[4 - 2]}`]: console.log(`${weekdays[4 - 2]}`),
// };

/* ******************************************************************* 
                          Optional Chaining (?.)
********************************************************************/

// If there exists an API Call where we are not certain if a certain property exists
// then instead of using if else to check we can use Optional Chaining to check if it
// exists or not. If it doesn't it gives the 'undefined' as answer

// console.log(restaurant.openingHours.mon.open); // Will Result in Error
// The above will provide an error as monday does not exist in the restaurant

// console.log(restaurant.openingHours.mon?.open);
// The above will check if the property mon exists then  only it will check for open property inside it but if it doesn't
// then it will return an undefined instead of error.

// console.log(restaurant.openingHours?.mon?.open);
// The above statement will first check if openingHours as a property exists or not then monday as a property exists or not
// If both exists then the value of open property will be returned otherwise undefined

// for (const day of weekdays) {
//   console.log(day);

//   // console.log(restaurant.openingHours[day].open); `Will Result in Error`
//   console.log(restaurant?.openingHours[day]?.open ?? 'closed');
// }

// Works similar to nullish coalescing

// ----------------------- It also works for functions -----------------------

// console.log(
//   restaurant.orderPizza?.('Panner', ['Mushroom', 'Tomato', 'Capsicum'])
//   // The above statement will return undefined as I am not returning anything
// );
// console.log(restaurant.orderHealthy?.(1, 2) ?? 'Method Does not Exist');

// // ----------------------- It also works for Arrays -----------------------

// const users = [{ name: 'Shreyash', email: 'shreyashbhardwaj@zohomail.in' }];

// console.log(users[0]?.name ?? 'Array Empty');

// /* *******************************************************************
//                         Iterating Over Objects
// ********************************************************************/

// // The thing is we do not have a direct way of iterating over Objects so we do it indirectly
// // When we iterate over objects we can do it in 3 ways

// // 1. Only Showing Properties

// const properties = Object.keys(restaurant.openingHours);

// console.log(
//   'Object.keys(restaurant.openingHours) contains an array with the Keys of the restaurant.opening Hours',
//   properties
// );

// for (const key of properties /* Instead of Properties I can directly write Object.keys(restaurant.openingHours) */) {
//   console.log(key);
// }

// // 2. Only Showing Values

// const values = Object.values(restaurant.openingHours);
// console.log(
//   'Object.values(restaurant.openingHours) contains an array with the Values of the restaurant.opening Hours',
//   properties
// );

// for (const value of values /* Instead of Properties I can directly write Object.keys(restaurant.openingHours) */) {
//   console.log(value);
// }

// // 3. Or showcase both at the same time

// const objectValue = Object.entries(restaurant.openingHours);

// console.log(
//   'Object.entire(restaurant.openingHours) contains an array with the entire object data of the restaurant.opening Hours'
// );

// /*
// console.log(Object.entries(restaurant.openingHours));
// It works similar to the inbuilt function for arrays arrayVariable.entries(); but we do not provide any parameter for
// the entries function unlike for Object
// */
// for (const [key, { open, close }] of objectValue) {
//   console.log(`${key} contains this value: ${open} and ${close}`);
// }

/* *******************************************************************
                      SETS
********************************************************************/

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// To make a Set

// 1. Set can hold heterogenous mixture of data
// 2. Does not hold duplicate data

// Syntax:  const/let variableName = new Set(Iterable)

// It must always be an iterable that is array,string

const ordersSet = new Set([
  'Shreyash',
  'Bhavya',
  'Ram',
  'Shyam',
  'Bhavya',
  'Ram',
]);

console.log(ordersSet);

const characters = new Set('Shreyash'); //It will remove the duplicates but capital and small are taken as different values
console.log(characters);

// To get the length of the set

console.log(ordersSet.size);

// We can check if a value exists in Set or no

console.log(ordersSet.has('Shreyash')); // Will Return True
console.log(ordersSet.has('Krishna')); // Will Return False

// To add we use

ordersSet.add('Krishna');
console.log(ordersSet);

// To Delete we use

ordersSet.delete('Bhavya');
console.log(ordersSet);

// To delete all the values in a Set

// ordersSet.clear();

// As they are iterables we can use it to loop over them

for (const order of ordersSet) console.log(order);

// Spread Operator also works here

console.log([
  ...new Set(['Waiter', 'Chef', 'Manager', 'Waiter', 'Chef', 'Manager']),
]);

// ES 2025 new Set Operations
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

// Intersection
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log(commonFoods);

// Union
const allFoods = mexicanFoods.union(italianFoods);
console.log(allFoods);

// Another way to achieve union without using the function

console.log(new Set([...mexicanFoods, ...italianFoods]));

// Then to convert to Array

console.log([...new Set([...mexicanFoods, ...italianFoods])]);

// Difference

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log(uniqueMexicanFoods);

// Unique from both

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);

console.log(uniqueItalianAndMexicanFoods);

// To check if one set is completely different from another set

console.log(mexicanFoods.isDisjointFrom(italianFoods));

/* *******************************************************************
                      Maps
********************************************************************/

// They store data in key:value pairs but unlike in objects the key can be any data type unlike in objects where the
// key is always transformed to string

const rest = new Map();
rest.set('name', 'Big House');
rest.set(1, 'Firenze ');

console.log(rest);

rest
  .set('categories', [
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
  ])
  .set(true, 'We are open')
  .set(false, 'We are close')
  .set('open', 12)
  .set('close', 23);

console.log(rest);

console.log(rest.get(true));
console.log(rest.get('open'));
console.log(rest.get('categories'));

const time = 21;
console.log(rest.get(time < rest.get('close') && time > rest.get('open')));

// To get a certain key in this
console.log(rest.has('categories'));

// To delete
rest.delete(1); // only deletes item based on the key provided

// rest.set([1, 2, 3], 'Chicken Noodle Soup');
// Now for the above one if we were to call it using .get

console.log(rest.get([1, 2, 3])); // Will give undefined even though we have written this the same way as in the heap it points to
// 2 different arrays [1, 2, 3]
// To do this properly we will do

const arr = [1, 2, 3];
rest.set(arr, 'Chicken Noodle Soup');
console.log(rest.get(arr));

console.log(rest);
console.log(rest.size); //To get the size of the map

// rest.clear();  // Will delete all the values in the map

/* ***************************************************
Converting Objects to Maps                       
*****************************************************/

// Consider the below method of creating Maps
const question = new Map([
  ['question', 'what is your name'],
  [1, 'Shreyash'],
  [2, 'Ram'],
  [3, 'Shyam'],
  [true, 'You are correct'],
  [false, 'You are incorrect'],
]);

// If we look carefully the output is the same as when we use Object.entries(variableObject)

// So to convert an object into a Map Structure we just have to

console.log('Method to convert Object to Map');
const newMap = new Map(Object.entries(restaurant.openingHours));

console.log(newMap);

// So we can use for loop as map is also an iterable

for (const [key, value] of question) {
  // console.log('Hello');
  if (typeof key === 'number') console.log(key, value);
}

const ans = 3; //Number(prompt('Your Answer'));
console.log(question.get(ans === 3));

// To convert Map back to array

console.log([...question]);

/* *******************************************************************
                      STRINGS
********************************************************************/

const airplane = 'TAP Air India';
const plane = 'A420';

console.log(plane[0]);
console.log(plane[3]);
console.log('Hello'[3]);

console.log(airplane.length);
console.log('Hello'.length);

console.log(airplane.indexOf('r'));
console.log(airplane.lastIndexOf('i'));
console.log(airplane.indexOf('India'));

console.log(airplane.slice(4));
console.log(airplane.slice(4, 7));

// To find the first word that we do not know the value of

console.log(airplane.slice(0, airplane.indexOf(' ')));
console.log(airplane.slice(airplane.lastIndexOf(' ') + 1));

// In Js we also have negative indexes which works only for slice
console.log('Negative:', airplane.slice(-5));

const checkMiddleSeat = function (seat) {
  console.log(
    seat.toUpperCase().slice(-1) === 'B' || seat.toUpperCase().slice(-1) === 'E'
      ? 'Middle Seat'
      : 'Not Middle Seat'
  );
};

// checkMiddleSeat(prompt('Enter Seat No'));
checkMiddleSeat('11E');

console.log(airplane.toUpperCase());
console.log(airplane);

// Fix Capitalization of the String
let nameM = 'sHreYasH';
nameM = nameM.toLowerCase();
nameM = nameM[0].toUpperCase() + nameM.slice(1); // nameM.slice(0, 1).toUpperCase() + nameM.slice(1);
console.log(nameM);

//Comparing Emails

const email = 'a@b.c';
const loginEmail = '   a@b.C   /n';

const normalizedLoginEmail = loginEmail.toLowerCase().trim();
// const trimLoginEmail = lowerLoginEmail.trim();
console.log(normalizedLoginEmail);

// Replace

const priceGB = '288,76!!';
let priceUS = priceGB.replace('!', '$').replace(',', '.'); //replace() only removes the first occurrence of the search string
console.log(priceUS);

priceUS = priceGB.replaceAll('!', '$').replace(',', '.');
console.log(priceUS);

// Another way to use is regular expression

priceUS = priceGB.replace(/!/, '$');
console.log(priceUS);

// String Functions that return boolean values

const newPlane = 'A420ne0';
console.log(newPlane.includes('A420'));
console.log(newPlane.includes('B420'));
console.log(newPlane.startsWith('A4'));
console.log(newPlane.startsWith('B420'));
console.log(newPlane.endsWith('ne0'));
console.log(newPlane.endsWith('vim'));

const checkBaggage = function (baggage) {
  baggage = baggage.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('not Allowed');
  }
};

checkBaggage('gun');

// Split Function that splits the string based on a splitter/delimiter and converts the remaining string into array

console.log('Hi+my+name+is+Shreyash'.split('+'));

const [first, second] = 'Shreyash Bhardwaj'.split(' ');

console.log(first, second);

// Join Function takes an array and joins all its content based on delimiter of joiner

console.log(['Mr', first, second[0].toUpperCase() + second.slice(1)].join(' '));

const capitalizeName = function (names) {
  const name = names.split(' ');
  const nameUpper = [];

  for (const n of name) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  const capitalNames = nameUpper.join(' ');
  console.log(capitalNames);
};

capitalizeName('ram shyam krishna');

// Padding : It means giving a String a certain no of characters till it reaches the desired length

const message = 'Go to Gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));

const masking = function (cardNo) {
  const card = cardNo + ''; //String(cardNo);
  const last4Digits = card.slice(-4);
  console.log(last4Digits.padStart(card.length, 'x'));
};

masking(1234567890);

// Repeat

const msg = 'Bad Weather ... All Departures Delayed ';
console.log(msg.repeat(6));
/*
///////////////////////////////////////
// Coding Challenge #4


Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', function () {
  const getText = document.querySelector('textarea').value.split('\n');
  console.log(getText);
  let c = 1;

  for (const text of getText) {
    const [first, second] = text.trim().split('_');
    const camelCase =
      first.replace(first[0], first[0].toLowerCase()) +
      second.replace(second[0], second[0].toUpperCase());
    console.log(camelCase.padEnd(20, ' ') + '✅'.repeat(c) + '\n');
    c++;
  }
});
