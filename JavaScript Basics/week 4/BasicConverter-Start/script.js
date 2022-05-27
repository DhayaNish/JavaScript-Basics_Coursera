(function() {
    document
        .getElementById("convert")
        .addEventListener("submit", function(event) {
            event.preventDefault();
            //parseFloat (if we give character values it shows NaN)
            var distance = parseFloat(document.getElementById("distance").value);
            //alternative line
            //distance = parseFloat(distance);
            var answer = document.getElementById("answer");
            if (distance) {
                var conversion = distance * 1.699334;
                var roundConversion = Math.round(conversion * 1000) / 1000;
                //alternative line
                // var roundConversion = conversion.toFixed(3);
                //alert(roundConversion);

                answer.innerHTML = `<h2>${distance} miles conerts to ${conversion} kilometers</h2>`;
            } else {
                answer.innerHTML = "<h2>Please provide a number</h2>";
            }
        });
})();