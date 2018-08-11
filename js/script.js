var myLine = document.getElementById("myLine");
var length = myLine.getTotalLength();

// The start position of the drawing
myLine.style.strokeDasharray = length;

// Hide the myLine by offsetting dash. Remove this line to show the myLine before scroll draw
myLine.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
  var scrollpercent =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  var draw = length * scrollpercent;
  console.log(draw);

  // Reverse the drawing (when scrolling upwards)
  myLine.style.strokeDashoffset = length - draw;
  // console.log(length - draw);
}
