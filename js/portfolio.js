const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slidesWidth);

// Arrange the slides next to one another

//slides[0].style.left = slidesWidth * 0 + 'px';
//slides[1].style.left = slidesWidth * 1 + 'px';
//slides[2].style.left = slidesWidth * 2 + 'px';
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

// When I click left, move slides to the left

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
});


// When I click right, move slides to the right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
})


// When I click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
    // what indicator was clicked on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);
})

// make the user able to swipe left and right the carousel


// for the view my work i want my button to display the content
// and the arrow to animate while clicking

// Orphee lofi
// Block1 - Sign up path
function displayBlock1__lofi__orphee() {
    var icon = document.getElementById("linkArrow1__lofi");
    var block1 = document.getElementById("signUpPath__lofi");
    if (block1.style.display === "block") {
      block1.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block1.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }

// Block2 - Music editing
function displayBlock2__lofi__orphee() {
    var icon = document.getElementById("linkArrow2__lofi");
    var block2 = document.getElementById("musicEditing__lofi");
    if (block2.style.display === "block") {
      block2.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block2.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }

// Block3 - Export
function displayBlock3__lofi__orphee() {
    var icon = document.getElementById("linkArrow3__lofi");
    var block3 = document.getElementById("exportation__lofi");
    if (block3.style.display === "block") {
      block3.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block3.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }

// Block4 - Share
function displayBlock4__lofi__orphee() {
    var icon = document.getElementById("linkArrow4__lofi");
    var block4 = document.getElementById("share__lofi");
    if (block4.style.display === "block") {
      block4.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block4.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }

// Block5 - Cloud
function displayBlock5__lofi__orphee() {
    var icon = document.getElementById("linkArrow5__lofi");
    var block5 = document.getElementById("cloud__lofi");
    if (block5.style.display === "block") {
      block5.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block5.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }


// Orphee hifi

// Block1 - Sign up path
function displayBlock1__hifi__orphee() {
    var icon = document.getElementById("linkArrow1__hifi");
    var block1 = document.getElementById("signUpPath__hifi");
    if (block1.style.display === "block") {
      block1.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block1.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }

// Block2 - Music editing
function displayBlock2__hifi__orphee() {
    var icon = document.getElementById("linkArrow2__hifi");
    var block2 = document.getElementById("musicEditing__hifi");
    if (block2.style.display === "block") {
      block2.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block2.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }

// Block3 - Export
function displayBlock3__hifi__orphee() {
    var icon = document.getElementById("linkArrow3__hifi");
    var block3 = document.getElementById("exportation__hifi");
    if (block3.style.display === "block") {
      block3.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block3.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }

// Block4 - Share
function displayBlock4__hifi__orphee() {
    var icon = document.getElementById("linkArrow4__hifi");
    var block4 = document.getElementById("share__hifi");
    if (block4.style.display === "block") {
      block4.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block4.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }

// Block5 - Cloud
function displayBlock5__hifi__orphee() {
    var icon = document.getElementById("linkArrow5__hifi");
    var block5 = document.getElementById("cloud__hifi");
    if (block5.style.display === "block") {
      block5.style.display = "none";
      icon.className = "linkArrow__closed";
    } else {
      block5.style.display = "block";
      icon.className = "linkArrow__opened";
    }
  }