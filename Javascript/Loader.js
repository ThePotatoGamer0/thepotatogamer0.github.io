// Get the div elements with the class "content" and "loader"
const contentDiv = document.querySelector('.content');
const loaderDiv = document.querySelector('.loader');
// Initially hide the content div and show the loader div
contentDiv.style.display = 'none';
contentDiv.style.opacity = '0';
loaderDiv.style.display = 'block';
//Create the function that hides the loader
function loaderDisappear() {
    loaderDiv.style.display = 'none';
}
//Create the function that hides the loader and shows the content
function LoaderEnd() {
    loaderDiv.classList.add('fade-out');
    contentDiv.style.display = 'block';
    contentDiv.classList.add('fade-in');
    setTimeout(loaderDisappear, 500)
}
// Perform Switch
if (contentDiv.complete) {
    setTimeout(LoaderEnd, 500); // Call the function immediately if the div is already loaded
  } else {
    // Attach the event listener to the 'load' event of the div
    contentDiv.addEventListener('load', function() {
        setTimeout(LoaderEnd, 500);
    });
  }
setTimeout(LoaderEnd, 500); // half a second