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
if (contentDiv.complete) {
    setTimeout(LoaderEnd, 500); // Call the function immediately if the div is already loaded
  } else {
    // Attach the event listener to the 'load' event of the div
    contentDiv.addEventListener('load', function() {
        setTimeout(LoaderEnd, 500);
    });
  }
setTimeout(LoaderEnd, 500); // half a second