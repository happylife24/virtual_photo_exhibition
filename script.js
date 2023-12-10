 //   music button
 let isPlaying = false;

 function togglePlayPauseButton() {
     const button = document.querySelector(".play");
     var audio = document.getElementById("myAudio");

     if (isPlaying) {
         button.innerHTML = "Play";
         audio.pause();
     } else {
         button.innerHTML = "Pause";
         audio.play();
     }

     audio.onended = function () {
         button.innerHTML = "Play";
     }

     isPlaying = !isPlaying;
 }

 
//   sliding photos
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


