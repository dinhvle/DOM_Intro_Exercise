window.onload = function () {

// Change the greeting from "Hello, There!" to "Hello, World!".
document.getElementById('greeting').innerHTML = "Hello, World!";

// Set the background color of each `<li>` to `yellow`.
var itemsList = document.querySelectorAll("li");
for (var i = 0; i < itemsList.length; i++) {
  itemsList[i].style.backgroundColor = "yellow";
  itemsList[i].addEventListener("click", selectItem);
}

// Create and append image
var img = document.createElement('img');
img.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif";
document.getElementById('greeting').appendChild(img);

// Add the class of `selected` to an `<li>` when it is clicked. Remove it from any other `li`s as well.
// Change the image to be the most recently clicked food item.
function selectItem() {
  var curSelected = document.querySelector(".selected");
  if (curSelected) { curSelected.className = ""; }
  this.className = "selected";
  document.querySelectorAll("img")[1].src = "./images/" + this.innerHTML + ".jpeg";
}

// When the gray div is moused over, it's removed from the DOM.
document.querySelector("#ghosting").addEventListener("mouseover", function() {
  this.remove();
});

// When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.
var doubleWidth = function() {
  this.style.width = '400px';
};

var resetWidth = function() {
  this.style.width = '200px';
};

document.querySelector("#resize").addEventListener("mouseenter", doubleWidth);
document.querySelector("#resize").addEventListener("mouseleave", resetWidth);

// document.querySelector("#resize").addEventListener("mouseout", function() {
//   this.remove();
// });

// When the reset button is clicked - remove the `selected` class from each `<li>` and change the image to `panic.jpeg`.
// Solution is incorrect here, will fix later.
document.querySelector("#reset").addEventListener("click",resetButtonHandler);

function resetButtonHandler() {
  var curSelected = document.querySelector(".selected");
  if (curSelected) { curSelected.className = ""; }
  document.querySelectorAll("img")[1].setAttribute("src","./images/panic.jpeg");
}

// When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, the page alerts the message "I HATE NUMBERZZZ!"
// Solution is not working either, will fix later
document.querySelector("body").addEventListener("keydown", noDigits);
var noDigits = function(e) {
  if (e.keyCode >= 48 && e.keyCode <= 57) {
    alert("I HATE NUMBERZZZ!");
  }
};


};
