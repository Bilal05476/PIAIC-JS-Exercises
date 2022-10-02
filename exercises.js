// Exercies 2
// var person = "John";
// document.write(`Hello ${person}, would you like to eat something? <br />`);

// Exercise 3
// var person = "smith";
// function titleCase(string) {
//   var word = string.split(" ");
//   for (var i = 0; i < word.length; i++) {
//     word[i] = word[i][0].toUpperCase() + word[i].slice(1);
//   }
//   document.write(word.join(" "));
// return word;
// }
// document.write(person.toLowerCase());
// document.write(person.toUpperCase());
// titleCase(person);

// Exercise 4
// document.write(
//   'Albert Einstein once said, "A person who never made a mistake never tried anything new."'
// );

// Exercise 5
// var famous_person = "Albert Einstein";
// var message = '"A person who never made a mistake never tried anything new."';
// document.write(`${famous_person} once said, ${message}`);

// Exercie 6
// var person_name = "Albert";
// var result = person_name.replace(/\s/g, "");

// Exercise 7
// document.write(5 + 3);
// document.write(11 - 3);
// document.write(2 * 4);
// document.write(16 / 2);

// Exercise 8
// for (var i = 0; i < 4; i++) {
// console.log(5 + 3);
// }

// Exercise 9
// fav_num = 5;
// document.write(`Your favorite number is: ${fav_num}`);

// Exercise 10 Adding Comments for each program

// Exercise 11
// var names = ["Sheraz", "Krish", "Teerath"];
// names.map((item) => document.write(item + "<br />"));

// Exercise 12
// var names = ["Sheraz", "Krish", "Teerath"];
// names.map((item) => document.write("Hello, Good Morning ", item, ".<br />"));

// Exercise 13
// var transportation = "car";
// var exm_statements = [
//   "I would like to own a honda ",
//   "I would love to drive a honda ",
//   "I would prefer honda ",
// ];

// exm_statements.map((item) =>
//   document.write(`${item} ${transportation}.<br />`)
// );

// Exercise 14
// var guest_list = ["Sheraz", "Krish", "Teerath"];
// var invitation =
//   "Hope you are doing well. I am invited you at dinner tonight at my home";
// guest_list.map((item) =>
//   document.write(
//     `Hey ${item}, ${invitation}. <br />`
//   )
// );

// Exercise 15
// var guest_list = [
//   { name: "Sheraz", dinner: true },
//   { name: "Krish", dinner: true },
//   { name: "Sanskar", dinner: false },
// ];
// var invitation =
// "Hope you are doing well. I am invited you at dinner tonight at my home";
// var cancel = "It is sad to hear you can't make a dinner";
// guest_list.map((item) => {
//   if (item.dinner) {
//     document.write(`Hey ${item.name}, ${invitation}. <br />`);
//   } else {
//     document.write(`Hey ${item.name}, ${cancel}. <br />`);
//   }
// });

// Exercise 16
// var guest_list = ["Sheraz", "Krish", "Teerath"];
// guest_list.unshift("Ali"); // starting
// guest_list.splice(2, 0, "Ahmed"); // middle
// guest_list.push("Bilal"); // ending
// var invitation =
//   "Hope you are doing well. I am invited you at dinner tonight at my home. I have found the bigger dinner table";
// guest_list.map((item) => document.write(`Hey ${item}, ${invitation}. <br />`));

// Exercise 17
// var guest_list = ["Ali", "Sheraz", "Krish", "Ahmed", "Teerath", "Bilal"];
// for (var i = guest_list.length; i > 2; i--) {
//   var name = guest_list.pop();
//   document.write(
//     `Sorry ${name}, you are not invited to dinner because of my big dinner not arrive at time. <br />`
//   );
// }

// guest_list.map((item) =>
//   document.write(
//     `Hey ${item}, you are invited to dinner, I'm only invite two people because my big dinner not arrived at time. <br />`
//   )
// );
// for (var y = guest_list.length; y === guest_list.length; y--) {
//   guest_list.pop();
// }
// document.write("Empty List:", guest_list);

// Exercise 18
// var locations = ["Skardu", "Baku", "Makkah", "Turkey", "Madina"];
// document.write(`Original Order: ${locations} <br />`);

// var alphabeticOrder = [...locations].sort();
// document.write(`Alphabetic Order: ${alphabeticOrder} <br />`);
// document.write(`Original Order: ${locations} <br />`);

// var reverseAlphaOrder = [...locations].sort().reverse();
// document.write(`Reverse Alpha Order: ${reverseAlphaOrder} <br />`);
// document.write(`Original Order: ${locations} <br />`);

// var reverseOrder = [...locations].reverse();
// document.write(`Reverse Order: ${reverseOrder} <br />`);
// var reverseOrder2 = [...reverseOrder].reverse();
// document.write(`Reverse Order Again: ${reverseOrder2} <br />`);

// locations.sort();
// document.write(`Sorted Array: ${locations} <br />`);

// locations.reverse();
// document.write(`Reverse Sorted Array: ${locations} <br />`);

// Exercise 19
// var guest_list = ["Ali", "Sheraz", "Krish", "Ahmed", "Teerath", "Bilal"];
// document.write(
//   `I'm inviting the ${guest_list.length} guest in my tonight dinner.`
// );

// Exercise 20
// var input;

// var country = [];
// var language = [];
// var monutain = [];

// function countryinp(i) {
//   input = prompt(`Enter ${i} Country`);
//   country.push(input);
// }
// function langinp(i) {
//   input = prompt(`Enter ${i} Language`);
//   language.push(input);
// }
// function mountinp(i) {
//   input = prompt(`Enter ${i} Monutain`);
//   monutain.push(input);
// }
// for (var i = 1; i < 3; i++) {
//   countryinp(i);
//   langinp(i);
//   mountinp(i);
// }
// if (country.length) {
//   document.write(
//     `Country: ${country} <br /> Language: ${language} <br /> Mountain: ${monutain} <br />`
//   );
// }

// Exercise 21
// var input;
// var locations = {
//   country: [],
//   language: [],
//   monutain: [],
// };

// function countryinp(i) {
//   input = prompt(`Enter ${i} Country`);
//   locations.country.push(input);
// }
// function langinp(i) {
//   input = prompt(`Enter ${i} Language`);
//   locations.language.push(input);
// }
// function mountinp(i) {
//   input = prompt(`Enter ${i} Monutain`);
//   locations.monutain.push(input);
// }
// for (var i = 1; i < 3; i++) {
//   countryinp(i);
//   langinp(i);
//   mountinp(i);
// }
// if (locations.country.length) {
//   document.write(
//     `Country: ${locations.country} <br /> Language: ${locations.language} <br /> Mountain: ${locations.monutain} <br />`
//   );
// }

// Exercise 22 // Intention Error
// var guest_list = ["Ali", "Sheraz", "Krish"];
// console.log(guest_list);

// Exercise 23
// var name = "Joe";
// document.write(`${name === "John" ? "I predict true" : "I pridict false"}  <br />`);
// var age = 19;
// document.write(`${age >= 18 ? "I predict true" : "I pridict false"} <br />`);
// var gender = "male";
// document.write(`${gender === "male" ? "I predict true" : "I pridict false"} <br />`);
// var section = "B";
// document.write(`${section === "B" ? "I predict true" : "I pridict false"} <br />`);
// var institute = "Iqra";
// document.write(`${institute === "PIAIC" ? "I predict true" : "I pridict false"} <br />`);
// var country = "PK";
// document.write(`${country === "UK" ? "I predict true" : "I pridict false"} <br />`);
// var city = "Karachi";
// document.write(`${city === "karachi" ? "I predict true" : "I pridict false"} <br />`);
// var area = "DHA";
// document.write(`${area === "DHA" ? "I predict true" : "I pridict false"} <br />`);
// var block = "13D";
// document.write(`${block === "13B" ? "I predict true" : "I pridict false"} <br />`);
// var enrolled = true;
// document.write(`${enrolled === true ? "I predict true" : "I pridict false"} <br />`);

// Exercise 24

// Tests for equality and inequality with strings
// var num = 32;
// document.write(`${num >= 20 ? "I predict true" : "I pridict false"} <br />`);
// document.write(`${num == 20 ? "I predict true" : "I pridict false"} <br />`);

// Tests using the lower case function
// var name = "Bilal".toLowerCase();
// document.write(
//   `${name === "Bilal" ? "I predict true" : "I pridict false"} <br />`
// );
// document.write(
//   `${name === "bilal" ? "I predict true" : "I pridict false"} <br />`
// );

// Numerical tests involving equality and inequality,
// greater than and less than, greater than or equal to, and less than or equal to
// var num = 32;
// document.write(`${num === 20 ? "I predict true" : "I pridict false"} <br />`);
// document.write(`${num !== 20 ? "I predict true" : "I pridict false"} <br />`);
// document.write(`${num > 20 ? "I predict true" : "I pridict false"} <br />`);
// document.write(`${num < 20 ? "I predict true" : "I pridict false"} <br />`);
// document.write(`${num >= 20 ? "I predict true" : "I pridict false"} <br />`);
// document.write(`${num <= 20 ? "I predict true" : "I pridict false"} <br />`);

// Tests using "and" and "or" operators
// var num = 32;
// document.write(
//   `${num === 20 || num > 20 ? "I predict true" : "I pridict false"} <br />`
// );
// document.write(`${num === 20 && num > 20 ? "I predict true" : "I pridict false"} <br />`);

// Test whether an item is in a array
// var newArray = ["Bilal", "Ahmed"];
// document.write(
//   `${newArray.includes("Ali") ? "I predict true" : "I pridict false"} <br />`
// );

// Test whether an item is not in a array
// document.write(
//   `${!newArray.includes("Ali") ? "I predict true" : "I pridict false"} <br />`
// );

// Exercise 25
// var alien_color = "green";
// document.write(
//   `${alien_color === "green" ? "Player earned 5 points" : ""} <br />`
// );

// Exercise 26
// var alien_color = "green";

// if (alien_color === "green") {
//   document.write("Player just earned 5 points for shooting the alien <br />");
// } else {
//   document.write("Player just earned 10 points <br />");
// }

// if (!alien_color === "green") {
//   document.write("Player just earned 5 points for shooting the alien");
// } else {
//   document.write("Player just earned 10 points");
// }

// Exercise 27
// var alien_color = "red";
// if (alien_color === "green") {
//   document.write("Player earned 5 points <br />");
// } else if (alien_color === "red") {
//   document.write("Player earned 15 points <br />");
// } else if (alien_color === "yellow") {
//   document.write("Player earned 10 points <br />");
// }
// var alien_color = "green";
// if (alien_color === "green") {
//   document.write("Player earned 5 points <br />");
// } else if (alien_color === "red") {
//   document.write("Player earned 15 points <br />");
// } else if (alien_color === "yellow") {
//   document.write("Player earned 10 points <br />");
// }
// var alien_color = "yellow";
// if (alien_color === "green") {
//   document.write("Player earned 5 points <br />");
// } else if (alien_color === "red") {
//   document.write("Player earned 15 points <br />");
// } else if (alien_color === "yellow") {
//   document.write("Player earned 10 points <br />");
// }

// Exercise 28
// var age = 22;
// if (age < 2) {
//   document.write("Person is baby <br />");
// } else if (age >= 2 && age < 4) {
//   document.write("Person is toddler <br />");
// } else if (age >= 4 && age < 13) {
//   document.write("Person is kid <br />");
// } else if (age >= 13 && age < 20) {
//   document.write("Person is teenager <br />");
// } else if (age >= 20 && age < 65) {
//   document.write("Person is adult <br />");
// } else {
//   document.write("Person is elder <br />");
// }

// Exercise 29
// var favorite_fruits = ["Mango", "Apple", "Banana"];
// if (favorite_fruits.includes("Banana")) {
//   document.write("You really like banana <br />");
// }
// if (favorite_fruits.includes("Grapes")) {
//   document.write("You really like Grapes <br />");
// }
// if (favorite_fruits.includes("Mango")) {
//   document.write("You really like mango <br />");
// }
// if (favorite_fruits.includes("Gray Fruit")) {
//   document.write("You really like gray fruit <br />");
// }
// if (favorite_fruits.includes("Apple")) {
//   document.write("You really like apple <br />");
// }

// Exercise 30
// var users = ["Bilal", "Sheraz", "Eric", "Admin", "John"];
// users.map((item) => {
//   if (item === "Admin") {
//     document.write(
//       `Hello ${item}, would you like to see a status report? <br />`
//     );
//   } else {
//     document.write(`Hello ${item}, thank you for logging in again <br />`);
//   }
// });

// Exercise 31
// var users = [];
// if (!users.length) {
//   document.write("We need to add some users");
// } else {
//   users.map((item) => {
//     if (item === "Admin") {
//       document.write(
//         `Hello ${item}, would you like to see a status report? <br />`
//       );
//     } else {
//       document.write(`Hello ${item}, thank you for logging in again <br />`);
//     }
//   });
// }

// Exercise 32
// var currrent_users = [
//   "bilal_ahmed",
//   "ali_saeed",
//   "sheraz_ahmed",
//   "krish_karan",
//   "saleem_ali",
// ];
// var new_users = [
//   "bilal_ahmed99",
//   "ali_saeed32",
//   "sheraz_ahmed",
//   "krish_karan2",
//   "saleem_ali",
// ];

// new_users.map((item) => {
//   if (currrent_users.includes(item)) {
//     document.write(`${item} username is already exist! <br />`);
//   } else {
//     document.write(`${item} username is available! <br />`);
//   }
// });

// Exercise 33
// var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// num.map((item) => {
//   if (item === 1) {
//     document.write(`${item}st <br />`);
//   } else if (item === 2) {
//     document.write(`${item}nd <br />`);
//   } else if (item === 3) {
//     document.write(`${item}rd <br />`);
//   } else {
//     document.write(`${item}th <br />`);
//   }
// });

// Exercise 34
// var fav_pizza = ["Arabic Ranch", "Delight Fajita", "BBQ Chicken Cheese"];
// for (var i = 0; i < fav_pizza.length; i++) {
//   document.write(`I like ${fav_pizza[i]} pizza. <br />`);
// }
// document.write(
//   "I like these kinds of pizza. I love these kinds of pizza. I would love to eat these kinds of pizza!"
// );

// Exercise 35
// var animnals = ["Lion", "Tiger", "Cheetah"];
// for (var i = 0; i < animnals.length; i++) {
//   document.write(`${animnals[i]} have the good smell ability. <br />`);
// }
// document.write(
//   "Any of these animals could have be dangerous for humans. <br />"
// );

// Exercise 36
// function make_shirt(size, text) {
//   document.write(
//     `The size of shirt should be: ${size}. <br />The message printed on the shirt should be: ${text}. <br />`
//   );
// }
// make_shirt("small", "Hello world from JavaScript");

// Exercise 37
// function make_shirt(size, text) {
//   if (size === "large" || size === "medium") {
//     document.write("I Love JavaScript");
//   } else {
//     document.write(
//       `${text}. <br />`
//     );
//   }
// }
// make_shirt("small", "Hello world from JavaScript");

// Exercise 38
// function describe_city(city, country = "Pakistan") {
//   document.write(`${city} is in ${country} <br />`);
// }
// describe_city("karachi");
// describe_city("lahore");
// describe_city("Baku", "Azerbaijan");

// Exercise 39
// function city_country(city, country) {
//   return `"${city}, ${country}" <br />`;
// }
// document.write(city_country("Karachi", "Pakistan"));
// document.write(city_country("Baku", "Azerbaijan"));
// document.write(city_country("Sharjah", "UAE"));

// Exercise 40
// function make_album(artistName, albumTitle, numTrack) {
//   const musicAlbum = {
//     artistName,
//     albumTitle,
//     numTrack,
//   };
//   if (numTrack) {
//     return `Artist: ${musicAlbum.artistName}, Album: ${musicAlbum.albumTitle}, Num of Track: ${musicAlbum.numTrack} <br />`;
//   } else {
//     return `Artist: ${musicAlbum.artistName}, Album: ${musicAlbum.albumTitle} <br />`;
//   }
// }
// document.write(make_album("Atif Aslam", "Aarzoo"));
// document.write(make_album("Arijit Singh", "Ashiqui"));
// document.write(make_album("Rahat Fateh Ali", "Zindagi", 21));

// Exercise 41
// var magicians = ["kallie", "brownie", "Loodi"];
// function show_magicians(magician) {
//   return `${magician} <br />`;
// }
// magicians.map((item) => document.write(show_magicians(item)));
