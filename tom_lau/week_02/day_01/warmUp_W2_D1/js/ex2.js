// Exercises: Objects
//
// The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
let recipe = {
  title: "Butterscoth",
  servings: 1
  ingredients: ["butter", "scotch"]
};

  console.log ( recipe.title );
  console.log ( `Serves: ${ recipe.serving }`);
for (let i = 0; i < recipe.ingredients.lenght; i++) {
  console.log(recipe.ingredients)
}



//////Tom////
let spingRoll = {

  mole: "fingerFood";
  servves : 2;
  ingredients : "cinnamon, cumin, cocoa";

};

// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


// var lizzieTheCat = {
//   age: 18,
//   furColor: "grey",
//   likes: ["catnip", "milk"],
//   birthday: {"month": 7, "day": 17, year: 1994}
// }
//
// function describeCat(cat) {
//   console.log("This cat is " + cat.age + " years old with " + cat.furColor + " fur.");
// }
//
// describeCat(lizzieTheCat);


let library = [
  {title: 'Suoergods', author: 'Judy', alreadyRead: false},
  {title: 'Kid,' author: 'Peter', alreadyRead: true},
  {title: 'food' author: 'Marcus', alreadyRead: false}
];

// console.log (library);

for (let i = 0; i < library.length; i++) {
let book = library[i];
// console.log(book);
let info = `${book.title} by ${ book.author}` ;

if (book.alreadyRead === true) {
  console.log (`You already read ${ info}`)

} else {
  console.log (`You need to read${ info}`);
  }
}


// let = books = {
//   title : ["The Habbit", "Color", "Train"]
//   author : ["J.R.R Tolkien", "Judy Chan", "Simon Smith"]
//   alreadyRead : "The Habbit"
// };
