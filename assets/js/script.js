
/*Code for responsive nav menu i used code from w3school "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_topnav"*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "main-nav") {
      x.className += " responsive";
    } else {
      x.className = "main-nav";
    }
  }


/*for button to scroll to top i used code from W3school "https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top*/
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}