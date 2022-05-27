(function() {
    'use strict';
    var detailsForm = document.querySelector('#destination_details_form');
    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event) {
        event.preventDefault();
        //1.extract the value from each form field
        //2.clear out the form field
        //3.run a function that creates the new card
        //4.if needed,change the header at the top of the destination
        //5.add the card

        //1.
        console.log("im pressed");
        var destName = event.target.elements["name"].value;
        var destLocation = event.target.elements["location"].value;
        var destPhoto = event.target.elements["photo"].value;
        var destDesc = event.target.elements["description"].value;
        //2.
        for (var i = 0; i < detailsForm.length; i++) {
            detailsForm.elements[i].value = "";
        }

        //create card here
        var destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

        var wishListContainer = document.getElementById('destinations_container');

        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHTML = "My Wish List";
        }

        //add the card
        document.querySelector('#destinations_container').appendChild(destCard);
    }

    function createDestinationCard(name, location, photoURL, description) {
        //creating div and named as card
        var card = document.createElement('div');
        card.className = 'card';
        //creating img
        var img = document.createElement('img');
        img.setAttribute('alt', name);
        //default image
        var constantPhotoUrl = 'images/signpost.jpg';

        if (photoURL.length === 0) {
            img.setAttribute('src', constantPhotoUrl);
        } else {
            img.setAttribute('src', photoURL);
        }

        card.appendChild(img);
        //creating div named as card-body
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        //creating h3 
        var cardTitle = document.createElement("h3");
        cardTitle.innerHTML = name;
        cardBody.appendChild(cardTitle);
        //creating h4 
        var cardSubTitle = document.createElement("h4");
        cardSubTitle.innerHTML = location;
        cardBody.appendChild(cardSubTitle);

        if (description.length !== 0) {
            var cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerHTML = description;
            cardBody.appendChild(cardText);
        }
        //creating delete btn
        var cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = "Remove";
        //remove 
        cardDeleteBtn.addEventListener("click", removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;

    }

    function removeDestination(event) {
        var card = event.target.parentElement.parentElement;
        card.remove();
    }
})();