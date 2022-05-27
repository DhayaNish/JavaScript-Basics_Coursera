(function() {
    "use strict";
    var myPar = document.querySelectorAll("p");
    for (var i = 0; i < myPar.length; i++) {
        myPar[i].style.color = "red";
        //checking in console
        console.log("script22 working");
    }
})();