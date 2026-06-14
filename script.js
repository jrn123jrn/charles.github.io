const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Thank you. Your inquiry is ready to be connected to email or WhatsApp.';
  contactForm.reset();
});
