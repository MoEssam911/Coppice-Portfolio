// Page dosen't show untill animation done
// let main = document.getElementsByTagName("main")[0];
// main.style.display = "none";
// setTimeout(() => {
//   main.style.display = "block";
// }, 2490);

// navbar change
let navLinks = document.querySelectorAll(".nav-item a");
Array.from(navLinks).forEach(link => {
  link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach(link => link.classList.remove("active"));
      link.classList.add("active");
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Nav Bar
let nav = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY >= 500) {
    nav.classList.add("dark");
  } else {
    nav.classList.remove("dark");
  }
};

let iconContainer = document.querySelector(".icon-container");
let toggle = false;

iconContainer.addEventListener("click", () => {
  if (toggle === false) {
    document.querySelector(".menu-icon span:first-child").style = `
        top: 6px; transform: rotate(45deg);
      `;
    document.querySelector(".menu-icon span:nth-child(2)").style = `
      opacity: 0;
    `;
    document.querySelector(".menu-icon span:last-child").style = `
      top: 6px;transform: rotate(-45deg);
    `;
    toggle = !toggle;
  } else {
    document.querySelector(".menu-icon span:first-child").style = `
      top: 0px; transform: rotate(0deg);
    `;
    document.querySelector(".menu-icon span:nth-child(2)").style = `
      opacity: 1;
    `;
    document.querySelector(".menu-icon span:last-child").style = `
      top: 12px;transform: rotate(0deg);
    `;
    toggle = !toggle;
  }
});

//
let li2 = document.getElementsByClassName('overlay-list');
let car = document.getElementById('carouselExampleAutoplaying2');
car.addEventListener("slid.bs.carousel", function (e) {
  li2[e.from].classList.remove('list-active')
  li2[e.to].classList.add('list-active')
});

let li2m = document.getElementsByClassName('overlay-list2');
// let car = document.getElementById('carouselExampleAutoplaying2');
car.addEventListener("slid.bs.carousel", function (e) {
  li2m[e.from].classList.remove('list-active')
  li2m[e.to].classList.add('list-active')
});


// Get a reference to the carousel element
var allCarsouel = document.querySelectorAll('.carousel-fade');
var targetCarsouel;
var intervalId; // Variable to store the interval ID
var isHovered = false; // Flag to track hover state

// Function to start auto-play
function startAutoPlay(targetCarsouel) {
  intervalId = setInterval(function () {
    // Trigger the carousel to move to the next slide
    nextSlide(targetCarsouel);
  }, 1000); // Adjust the time interval as needed (e.g., 3 seconds)
}

// Function to stop auto-play
function stopAutoPlay() {
  clearInterval(intervalId);
}

// Function to move to the next slide
function nextSlide(targetCarsouel) {
  var activeSlide = targetCarsouel.querySelector('.carousel-item.active');
  var nextSlide= activeSlide.nextElementSibling;
  if (activeSlide.nextElementSibling) {
    nextSlide = activeSlide.nextElementSibling
  } else {
    nextSlide = targetCarsouel.querySelectorAll('.carousel-item')[0];
  }
  activeSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

Array.from(allCarsouel).forEach(function (targetCarsouel) {
  targetCarsouel.addEventListener('mouseenter', function () {
    isHovered = true;
    startAutoPlay(targetCarsouel);
  });
  targetCarsouel.addEventListener('mouseleave', function () {
    isHovered = false;
    stopAutoPlay();
  
  });
});

// /////////////////////////////////////////////

// Initialize Email.js with your user_id
emailjs.init("rcUE8ssWv7yqudzWR");
emailjs.send()

const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value; 
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const phone = document.getElementById('phone')

        // Send the email using Email.js
        emailjs.send("service_e6badp2", "template_gg8itj5", {
            to_email: "mohameddessam303@gmail.com",
            from_name: name,
            from_email: email,
            from_phone: phone,
            message: message
        })
        .then(function(response) {
            console.log('Email sent successfully:', response);
            alert('Email sent successfully!');
        }, function(error) {
            console.error('Email sending failed:', error);
            alert('Email sending failed. Please try again later.');
        });
        contactForm.reset()
    });
