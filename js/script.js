document.addEventListener("DOMContentLoaded", function () {
  // HERO TEXT ROTATION
  const subtitle = document.getElementById("subtitle");
  const cta = document.getElementById("cta");

  const messages = [
    "Basement & Bathroom Remodeling",
    "Quality Work You Can Trust"
  ];

  let index = 0;

  function updateText() {
    if (subtitle) {
      subtitle.textContent = messages[index];
      index = (index + 1) % messages.length;
    }
  }

  updateText();
  setInterval(updateText, 3000);

  // CTA BUTTON TEXT
  if (cta) {
    cta.textContent = "Get a Free Quote";
    cta.href = "contact.html";
  }

  // FADE-IN ANIMATION FOR CARDS
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  cards.forEach(card => observer.observe(card));

const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".gallery img");
const closeBtn = document.querySelector(".close");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentIndex = 0;

// Open image
images.forEach((img, index) => {
  img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    currentIndex = index;
  };
});

// Close
closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

// Next image
function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

// Previous image
function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

rightArrow.onclick = showNext;
leftArrow.onclick = showPrev;

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (modal.style.display === "flex") {
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "Escape") modal.style.display = "none";
  }
});

});

