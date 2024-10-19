// Toggle the mobile menu
document.querySelector(".navbar_toggle").addEventListener("click", function() {
  var navMenu = document.querySelector(".navbar_menu");
  navMenu.classList.toggle("show");
});


document.getElementById("mobileMenu").addEventListener("click", function() {
  var navMenu = document.getElementById("navMenu");
  var toggleIcon = document.querySelector(".navbar_toggle");
  
  if (navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
    navMenu.classList.add("hide");
    setTimeout(() => {
      navMenu.classList.remove("hide");
    }, 600); // Match the duration of the animation
    toggleIcon.classList.remove("active");
  } else {
    navMenu.classList.add("show");
    navMenu.classList.remove("hide");
    toggleIcon.classList.add("active");
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.navbar_toggle');
  const menu = document.querySelector('.navbar_menu');

  if (toggleButton && menu) {
      toggleButton.addEventListener('click', function() {
          menu.classList.toggle('show');
      });
  } else {
      console.error('Toggle button or menu not found.');
  }
});





function closeMenu() {
  var navMenu = document.getElementById("navMenu");
  navMenu.classList.remove("show");
  navMenu.classList.add("hide");
  setTimeout(() => {
    navMenu.classList.remove("hide");
  }, 500); // Match the duration of the animation
}

document.getElementById("mobileMenu").addEventListener("click", function() {
  var navMenu = document.getElementById("navMenu");
  if (navMenu.classList.contains("show")) {
    closeMenu();
  } else {
    navMenu.classList.add("show");
    navMenu.classList.remove("hide");
  }
});

<script>
    document.querySelector('.navbar_toggle').addEventListener('click', function() {
        document.querySelector('.navbar_menu').classList.toggle('show')
    });
</script>

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.navbar_toggle');
  const menu = document.querySelector('.navbar_menu');

  if (toggleButton && menu) {
      toggleButton.addEventListener('click', function() {
          menu.classList.toggle('show');
      });
  } else {
      console.error('Toggle button or menu not found.');
  }
});




    


// app.js
const mobileMenuButton = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

mobileMenuButton.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    mobileMenuButton.classList.toggle('is-active');
});

