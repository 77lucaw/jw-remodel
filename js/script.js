document.addEventListener("DOMContentLoaded", function () {
  // HERO TEXT ROTATION
  const subtitle = document.getElementById("subtitle");
  const cta = document.getElementById("cta");

  const messages = [
    "Kitchen & Bathroom Remodeling",
    "Basements • Additions • Repairs",
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
});