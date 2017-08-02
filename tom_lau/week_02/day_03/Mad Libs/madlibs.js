//
//
// In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
//
// Add an event listener to the button so that it calls a makeMadLib function when clicked.
const button = document.getElementById('lib-button');

const makeStory = function () {
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const person = document.getElementById('person').value;

  const story = `${person} really likes ${adjective} ${noun}`;
  document.getElementById('story').innerHTML = story;
}

button.addEventListener('click', makeStory);


}


//find the button elements
//define the event event handler
//attach

// const counterButton = document.getElementById('counter');
// const incrementer = function() {
//     counterButton.innerHTML = +(counterButton.innerHTML) + 1;
// };
// counterButton.addEventListener('click', incrementer);
//
//
// const button = document.getElementById('button');
// const nameSayer = function () {
//   const myName = document.getElementById("myname").value;
//   alert("Hi, " + myName);
// };
//   button.addEventListener('click', nameSayer);
