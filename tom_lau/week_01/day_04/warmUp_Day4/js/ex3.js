// The Movie Database
//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

/////joe/////

let movie = {
  title: 'O Brother',
  duration: 107,
  stars: ['George Clooney', 'John', 'Marcus']
};

let movieInfo = function (m) {
  let info = `${ m.title }, lasts for ${ m.duration} minutes. Stars: ${m.stars.join(' ')}.`;
  console.log (info);
};

movieInfo (movie);



///////tom/////
let aboutMe = {
  favoriteMovie : "Puff the Magic Dragon",
  stars : "Puff, Jackie",
  time: "30 minutes",
};

function allAboutMe (me) {
  console.log(`${.favoriteMovie} last for ${ .time }` Stars ${})
}
////tom/////


/////example//////
var lizzieTheCat = {
  age: 18,
  furColor: "grey",
  likes: ["catnip", "milk"],
  birthday: {"month": 7, "day": 17, year: 1994}
}

function describeCat(cat) {
  console.log("This cat is " + cat.age + " years old with " + cat.furColor + " fur.");
}

describeCat(lizzieTheCat);




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
