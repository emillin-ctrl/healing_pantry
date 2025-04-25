// NAV TOGGLE
// Responsive nav menu toggle (adapted from Web Dev Tutorials on YouTube)
// Source: https://www.youtube.com/watch?v=flItyHiDm7E
// Accessed April 2025 | Adapted for use in SI539 W25 Final Clinet Project
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

// PLATE FILTER
const topicButtons = document.querySelectorAll('.topic-btn');
const plateCards = document.querySelectorAll('.explorer-card');

topicButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const filter = this.getAttribute('data-filter');
    // Toggle hidden class
    plateCards.forEach(card => {
      const topic = card.getAttribute('data-topic');
      if (filter === 'All' || topic === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});