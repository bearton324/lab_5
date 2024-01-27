let slideIndex = 0;
let interval = 2000;
let hasInterval = true;

function isCyclic() {
  if (hasInterval) hasInterval = false;
  else hasInterval = true;
}
function resizeImages(size) {
  document.getElementById("first-slide").style.width = size;
  document.getElementById("first-slide").style.heigth = size;
  document.getElementById("second-slide").style.width = size;
  document.getElementById("second-slide").style.heigth = size;
  document.getElementById("third-slide").style.width = size;
  document.getElementById("third-slide").style.heigth = size;
}
function changeInterval(_interval) {
  interval = _interval;
}
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  if (hasInterval) setTimeout(showSlides, interval);
}
