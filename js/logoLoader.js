
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

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.loader-container').style.display = 'none';
    document.querySelector('#loader-lottie-div').style.display = 'block';
    document.querySelector('.loader-video').addEventListener('loadeddata', function() {
      document.querySelector('#loader-lottie-div').style.display = 'none';
      document.querySelector('.loader-container').style.display = 'block';
    });
  });