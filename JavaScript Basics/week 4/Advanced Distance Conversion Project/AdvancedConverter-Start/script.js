(function() {
    "use strict";
    var convertType = 'miles';
    var heading = document.querySelector('h1');
    var intro = document.querySelector('p');
    var answerDiv = document.getElementById('answer');
    var form = document.getElementById('convert');

    document.addEventListener('keydown', function(event) {
        var key = event.code;

        if (key === 'keyK') {
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "type in a number of kilometers and click the to convert the distance into miles.";
        } else if (key === 'keyM') {
            convertType = 'miles';
            heading.innerHTML = "Miles to Kilometer Converter";
            intro.innerHTML = "type in a number of Miles and click the to convert the distance into kilometer.";
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var distance = parseFloat(document.getElementById('distance').value);
        if (distance) {
            //convert M to K 1.609344
            //convert k to M 0.621371192
            if (convertType == "miles") {
                var converted = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `${distance} miles converts to ${converted} kilometers`;
            } else {
                var converted = (distance * 0.621371192).toFixed(3);
                answerDiv.innerHTML = `${distance} kilometers converts to ${converted} miles`;
            }
        } else {
            answerDiv.innerHTML = "<h2>please provide a number!</h2>";
        }
    });
})();