const element = document.getElementById("sun");
const object = document.getElementById("object");
const sky = document.getElementById('sky');
const tree = document.getElementById('tree');
const aboutLink = document.getElementById('about-link');
const aboutSection = document.querySelector("#about-section");

const skillLink = document.getElementById('skill-link');
const skillSection = document.querySelector("#skill-section");

const reachLink = document.getElementById('reach-link');
const reachSection = document.querySelector("#reach-section");

const sections = document.querySelectorAll('section');

let temp;
window.onscroll = function () {
  temp = 0;
  sections.forEach(sec => {
    if (sec.classList.contains('show-animation')) {
      temp = 1;
      console.log('data');

    }
    if (window.scrollY >= sec.offsetTop && window.scrollY < sec.offsetTop + sec.offsetHeight) {
      sec.classList.add('show-animation');
      sec.style.transform = 'translateX(0%)';
      object.style.padding = '80px';
    }
    else {
      sec.classList.remove('show-animation');
      //sec.style.transform = 'translateX(-100%)';


    }
    if (temp <= 0) {
      object.style.padding = '0px';
    }

  }
  )

  let scrollPosition;
  const imageBottom = tree.offsetHeight + tree.offsetTop - tree.offsetWidth / 2;
  // Get the scroll position
  if (window.scrollY <= imageBottom + 85) {
    //console.log(window.scrollY);
    tree.style.filter = 'brightness(90%)';
    object.style.background = 'rgba(255, 165, 0, 0.7)';
    element.style.transition = "transform 0.8s ease";
    scrollPosition = window.scrollY / 2;
    sky.style.backgroundColor = "#B6FFFA";
    object.src = 'https://freepngimg.com/download/sun/23533-7-sun-transparent-image.png';
    object.style.padding = '0px';

  }
  else {
    tree.style.filter = 'brightness(40%)';
    //element.style.transition = "none";
    scrollPosition = window.scrollY / 2;
    // sky.style.backgroundColor = '#0f0f0f';
    sky.style.backgroundColor = 'black';
    object.style.background = 'rgba(255, 255, 255, 0.5)';
    //object.style.padding = '50px';
  }

  element.style.transform = `translateY(${scrollPosition + scrollPosition}px)`;
};
aboutLink.addEventListener('click', function (event) {
  event.preventDefault();
  aboutSection.scrollIntoView({ behavior: 'smooth' });
});
skillLink.addEventListener('click', function (event) {
  // Prevent the default behavior of the link (e.g., navigating to a new page)
  event.preventDefault();
  skillSection.scrollIntoView({ behavior: 'smooth' });
});
reachLink.addEventListener('click', function (event) {
  // Prevent the default behavior of the link (e.g., navigating to a new page)
  event.preventDefault();
  reachSection.scrollIntoView({ behavior: 'smooth' });
});