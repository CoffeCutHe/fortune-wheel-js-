var slideIndex = 0;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}

function randbool(){ 
  var time =   (getRandomInt(5,10));
  var timerInterval = 1;
  next_slide(timerInterval);
 
    setTimeout(() => { 
      
      clearTimeout(timerId); 
      var duration = 15 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      
      
       
      var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();
      
        if (timeLeft <= 0) {
          return clearInterval(interval);
        }
      
        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: r(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: r(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);


    }, time*1000);


}


function next_slide(tik){
  showSlides(slideIndex += 1);
  var interval = tik;
  timerId = setTimeout( () => { next_slide(interval);}, interval * 50);
  interval += 1;
  }

function getRandomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function r(min, max) {
  return Math.random() * (max - min) + min;
}

