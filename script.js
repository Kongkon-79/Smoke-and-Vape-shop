document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true, // Infinite loop
    autoplay: {
      delay: 4000, // Auto-slide every 3 seconds
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// navbar start

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileNav = document.getElementById("mobile-nav");

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeMenu.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  overlay.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  // Currency Dropdown
  const currencyDropdownBtn = document.getElementById("currency-dropdown-btn");
  const currencyDropdown = document.getElementById("currency-dropdown");

  currencyDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currencyDropdown.classList.toggle("show");
    currencyDropdownBtn.classList.toggle("active");
  });

  // Close currency dropdown when clicking outside
  document.addEventListener("click", () => {
    currencyDropdown.classList.remove("show");
    currencyDropdownBtn.classList.remove("active");
  });

  // Mobile Dropdown Toggles
  const mobileDropdownToggles = document.querySelectorAll(
    ".mobile-dropdown-toggle"
  );

  mobileDropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      // Toggle active class on the button
      this.classList.toggle("active");

      // Find the dropdown content
      const dropdownContent = this.parentElement.nextElementSibling;

      // Toggle show class on the dropdown content
      if (
        dropdownContent &&
        dropdownContent.classList.contains("mobile-dropdown-content")
      ) {
        dropdownContent.classList.toggle("show");
      }
    });
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      mobileNav.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});

// navbar end

