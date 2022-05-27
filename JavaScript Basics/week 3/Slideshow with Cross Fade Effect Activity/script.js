(function() {
    "use strict";
    //import images
    var myPhotos = ['slides/image1.jpg', 'slides/image2.jpg', 'slides/image3.jpg', 'slides/image4.jpg', 'slides/image5.jpg'];
    //current index position
    var currentImage = 0;

    var container = document.getElementById('content');
    var nextBtn = document.getElementById('next');
    var previousBtn = document.getElementById('previous');

    nextBtn.onclick = nextBtn;
    previousBtn.onclick = previousBtn;

    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        currentImage++;
        if (currentImage > myPhotos.length - 1) {
            currentImage = 0;
        }
        document.getElementById('myimage').src = myPhotos[currentImage];
    })


    previousBtn.addEventListener('click', function(event) {
        event.preventDefault();
        currentImage--;
        if (currentImage < 0) {
            currentImage = currentImage.length - 1;
        }
        document.getElementById('myimage').src = myPhotos[currentImage];
    })

    //another method
    /* NEXT BUTTON*/
    // nextBtn.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     currentImage++;
    //     if (currentImage > myPhotos.length - 1) {
    //         currentImage = 0;
    //     }
    //     swapImage();
    // });

    /*PREVIOUS BUTTON*/
    // previousBtn.addEventListener('click', function(event) {
    //     event.preventDefault();
    //     currentImage++;
    //     if (currentImage < 0) {
    //         currentImage =  myPhotos.length - 1;
    //     }
    //     swapImage();
    // });

    //function swapImage(){
    //    var newSlide = document.createElement('img');
    //     newSlide.src = `slides/${myPhotos[currentImage]}`;
    //     newSlide.className = "fadeinimg";
    //     container.appendChild(newSlide);

    //     if (container.children.length > 2) {
    //         container.removeChild(container.children[0]);
    //     }
    // };

})();