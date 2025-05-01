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
    if (direction === 'left') {
        loaderDiv.classList.add('fade-right');       // exit right
        contentDiv.classList.add('page-left-in');    // enter from left
    } else if (direction === 'right') {
        loaderDiv.classList.add('fade-left');        // exit left
        contentDiv.classList.add('page-right-in');   // enter from right
    } else {
        loaderDiv.classList.add('fade-out');         // default exit
        contentDiv.classList.add('fade-in');         // default entry
    }

    contentDiv.style.display = 'block';
    setTimeout(() => loaderDiv.style.display = 'none', 500);
}

window.addEventListener('load', () => {
    let direction = null;
    if (referrerIndex !== -1 && currentIndex !== -1) {
        direction = currentIndex > referrerIndex ? 'right' : 'left';
    }
    animateTransition(direction);
});
