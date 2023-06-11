let slideIndex = 0;
let isPaused = false;
let slideshowInterval;

showSlide(slideIndex);

function showSlide(n) {
  let slides = document.getElementsByClassName("slide");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";
  slides[slideIndex].style.animation = "fade 1s"; // Add fade animation
}

function changeSlide(n) {
  showSlide(slideIndex + n);
}

function pauseSlideshow() {
  isPaused = true;
  clearInterval(slideshowInterval);
}

function playSlideshow() {
  isPaused = false;
  slideshowInterval = setInterval(function () {
    if (!isPaused) {
      changeSlide(1);
    }
  }, 3000); // Change slide every 3 seconds (adjust as desired)
}

// Initialize the slideshow interval
playSlideshow();

// Add event listeners for pause and play buttons
document.getElementById("pauseButton").addEventListener("click", pauseSlideshow);
document.getElementById("playButton").addEventListener("click", playSlideshow);

// Add event listener for slideshow container to toggle play/pause
document
  .querySelector(".slideshow-container")
  .addEventListener("click", function () {
    if (isPaused) {
      playSlideshow();
    } else {
      pauseSlideshow();
    }
  });


  // ...

// Add touch event handlers for mobile devices
document
.querySelector(".slideshow-container")
.addEventListener("touchstart", handleTouchStart, false);
document
.querySelector(".slideshow-container")
.addEventListener("touchend", handleTouchEnd, false);

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
touchEndX = event.changedTouches[0].clientX;
handleSwipe();
}

function handleSwipe() {
const SWIPE_THRESHOLD = 100; // Minimum swipe distance to trigger slide change

if (touchEndX - touchStartX > SWIPE_THRESHOLD) {
  changeSlide(-1); // Swipe right, go to previous slide
} else if (touchStartX - touchEndX > SWIPE_THRESHOLD) {
  changeSlide(1); // Swipe left, go to next slide
}
}

// ...
