console.log("Website Prodi Kimia berjalan dengan baik");

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.navbar ul');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Tutup menu saat link diklik
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
    });
  });
}
