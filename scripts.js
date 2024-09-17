const hamburgerMenu = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navigation-menu');

if (hamburgerMenu instanceof HTMLElement && navigationMenu instanceof HTMLElement) {
  hamburgerMenu.addEventListener('click', () => {
    navigationMenu.classList.toggle('show');
  });

  // Add an event listener to the document to hide the menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.hamburger-menu,.navigation-menu')) {
      navigationMenu.classList.remove('show');
    }
  });
} else {
  throw new Error('Required elements not found:.hamburger-menu or.navigation-menu');
}