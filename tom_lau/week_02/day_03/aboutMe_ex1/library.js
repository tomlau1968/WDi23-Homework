let books = [
  {title: 'The Design of EveryDay Things',
   author: 'Don Norman',
   alreadyRead: false,
   cover: "http://fillmurry.com/31/31"
  },
  {title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true,
  cover: "http://fillmurry.com/31/31"
  }];
//
// for each book in books

let ul = document.craeteElement("ul");

for (var i = 0; i < bookd.length; i++) {
  let book = books[i];
  // craete paragraph
  let paragraph = document.creatElement("li");
  li.innerHTML = `<em>${[book.titl]}</em> by ${[book.author]}`;

  let cover =document.craeteElement("img")
  ul.appendChild( li );
}



//   Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.
