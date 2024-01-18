
const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', () => {

    setTimeout(() => {
        // loaderContainer.style.display = 'none';
        loaderContainer.classList.add("loader-hidden");
    }, 3000);

    // setTimeout(() => {
    //     loaderContainer.style.display = 'none';
    // }, 3000);
    
});