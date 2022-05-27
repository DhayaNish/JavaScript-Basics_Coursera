(function() {
    //import images
    const myImages = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg"
    ];
    //index value initially at [0]
    let currentImage = 0;

    document.getElementById("next").onclick = nextPhoto;
    document.getElementById("previous").onclick = previousPhoto;

    function nextPhoto() {
        //currentImage = currentImage + 1
        currentImage++;

        //if current image greater than 4 , set back to 0.
        if (currentImage > myImages.length - 1) {
            currentImage = 0;
        }
        document.getElementById("myimage").src = myImages[currentImage];
    }

    function previousPhoto() {
        //currentImage = currentImage - 1
        currentImage--;

        //if current image greater than 4 , set back to 0.
        if (currentImage < 0) {
            currentImage = myImages.length - 1;
        }
        document.getElementById("myimage").src = myImages[currentImage];
    }
})();