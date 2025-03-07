// Get the div element with the class "content"
const contentDiv = document.querySelector('.content');
const loaderDiv = document.querySelector('.loader');
// Initially hide the div
contentDiv.style.display = 'none';
contentDiv.style.opacity = '0';
loaderDiv.style.display = 'block';
function loaderDisappear() {
    loaderDiv.style.display = 'none';
}
function LoaderEnd() {
    loaderDiv.classList.add('fade-out');
    contentDiv.style.display = 'block';
    contentDiv.classList.add('fade-in');
    setTimeout(loaderDisappear, 500)
}
setTimeout(LoaderEnd, 3000); // 3 seconds