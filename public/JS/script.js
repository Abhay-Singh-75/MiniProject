let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
      },
      640: {
         slidesPerView: 3,
      },
      768: {
         slidesPerView: 4,
      },
      1000: {
         slidesPerView: 5,
      },
   },
});



// Function to fetch property details from the backend
document.querySelector("#registrationForm").addEventListener("submit", (e) => {
   e.preventDefault();
   const houseNumber = document.querySelector("#houseNumber").value;
   const ownerName = document.querySelector("#ownerName").value;
   const location = document.querySelector("#location").value;
   const dateOfRegister = document.querySelector("#registrationDate").value;
   fetchPropertyDetails(houseNumber,ownerName,location, dateOfRegister);
});


async function fetchPropertyDetails() {
   const response = await fetch('/check', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         houseNumber,
         ownerName,
         location,
         dateOfRegistration,
      }),
   });

   const result = await response.json();

   if (result.success) {
      // Show alert when property is found
      alert(result.message);
      // Display the property details
      displayPropertyDetails(result.data);
   } else {
      // Show alert when property is not found
      alert(result.message);
   }
}

// Function to display the property details in HTML
function displayPropertyDetails(property) {
   const container = document.getElementById('property-details');
   container.innerHTML = `
       <div class="property-block">
           <h3>Property Details</h3>
           <p><strong>House Number:</strong> ${property.houseNumber}</p>
           <p><strong>Owner Name:</strong> ${property.ownerName}</p>
           <p><strong>Location:</strong> ${property.location}</p>
           <p><strong>Date of Registration:</strong> ${property.dateOfRegister}</p>
       </div>
   `;
}

// Call the function to fetch and display property details
fetchPropertyDetails();

