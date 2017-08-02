
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".

let body = document.body;
body.style.fontFamily = "Arial, san-serif";

// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
let nickname = document.getelementById("nickname");
nickname.innerHTML = "The Blade";
document.getelementById('favorites').innerHTML = "Cook"
document.getelementById('favorites').innerHTML = "Sydney"

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.

let item = getelementByTagName ("li");
for (var i = 0; i < items.length; i++) {
  items[i].className = "listitem"
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
let bill = document.createElement("img")
bill.src = "nttp://fillmurry/com/80/80";
body.appendChild(bill);
