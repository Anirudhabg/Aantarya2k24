
const loaderPc = document.querySelector('.loader-pc');
const loaderMobile = document.querySelector('.loader-mobile');


window.addEventListener('load', () => {

    setTimeout(() => {
        // loaderContainer.style.display = 'none';
        loaderPc.classList.add("loader-hidden");
        loaderMobile.classList.add("loader-hidden");
    }, 3000);

    // setTimeout(() => {
    //     loaderContainer.style.display = 'none';
    // }, 3000);

});