const loaderPc = document.querySelector('.loader-pc');
const loaderMobile = document.querySelector('.loader-mobile');
const loaderlottie=document.querySelector('.loader-lottie');


window.addEventListener('load', () => {
    loaderlottie.classList.add("loader-hidden");
    setTimeout(() => {
        // loaderContainer.style.display = 'none';
        loaderPc.classList.add("loader-hidden");
        loaderMobile.classList.add("loader-hidden");
    }, 3000);
   

    // setTimeout(() => {
    //     loaderContainer.style.display = 'none';
    // }, 3000);

})
/*

    document.addEventListener("DOMContentLoaded", function() {
      // Hide the loader-container initially
      loaderContainer.classList.add("loader-hidden");

      // Show the loader-lottie-div
      loaderLottieDiv.style.display = 'block';

      // Load event listener for the video
      loaderVideo.addEventListener('loadeddata', function() {
        // Hide the loader-lottie-div once the video is loaded
        loaderLottieDiv.style.display = 'none';
      });
    });
    */