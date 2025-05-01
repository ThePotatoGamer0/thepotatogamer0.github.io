const navOrder = ['home', 'Itch.io-BrowserGames', 'Ruffler', '3DPrintingWeb'];

const contentDiv = document.querySelector('.content');
const loaderDiv = document.querySelector('.loader');

// Initially hide content, show loader
contentDiv.style.display = 'none';
loaderDiv.style.display = 'block';

// Extract page name from URL
function getPageName(url) {
    try {
        const path = new URL(url).pathname;
        if (path === '/' || path === '') return 'home';
        const segments = path.split('/').filter(Boolean);
        return segments[0];
    } catch {
        return null;
    }
}

const currentPage = getPageName(window.location.href);
const referrerPage = getPageName(document.referrer);
const currentIndex = navOrder.indexOf(currentPage);
const referrerIndex = navOrder.indexOf(referrerPage);

function animateTransition(direction) {
  contentDiv.style.display = 'block'; // show now, animate later

  if (direction === 'left') {
      loaderDiv.classList.add('fade-right');
      setTimeout(() => {
          contentDiv.classList.add('page-left-in');
      }, 500);
  } else if (direction === 'right') {
      loaderDiv.classList.add('fade-left');
      setTimeout(() => {
          contentDiv.classList.add('page-right-in');
      }, 500);
  } else {
      loaderDiv.classList.add('fade-out');
      setTimeout(() => {
          contentDiv.classList.add('fade-in');
      }, 500);
  }

  // Finally hide loader div after its animation
  setTimeout(() => {
      loaderDiv.style.display = 'none';
  }, 500);
}


window.addEventListener('load', () => {
    let direction = null;
    if (referrerIndex !== -1 && currentIndex !== -1) {
        direction = currentIndex > referrerIndex ? 'right' : 'left';
    }
    animateTransition(direction);
});
