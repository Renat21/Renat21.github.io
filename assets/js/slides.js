var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  document.getElementById("info" + slideIndex).style.display = "none";
  document.getElementById("header" + slideIndex).style.display = "none";
  slideIndex = slideIndex + n;
  if (slideIndex == 4)
      slideIndex = 1;
  else if (slideIndex == 0)
      slideIndex = 3;
  document.getElementById("info" + slideIndex).style.display = "grid";
  document.getElementById("header" + slideIndex).style.display = "grid";
  showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
  document.getElementById("info" + slideIndex).style.display = "none";
  document.getElementById("header" + slideIndex).style.display = "none";
  document.getElementById("info" + n).style.display = "grid";
  document.getElementById("header" + n).style.display = "grid";
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}