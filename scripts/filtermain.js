//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
//--------------------------------------------
const continents = [
    'North America', 'South America', 'Africa', 'Europe', 'Asia', 'Australia'
]

const events = [
    'Hurricane', 'Earthquake', 'Flood', 'Heat Wave', 'Wildfire', 'Drought',
    'Cyclone', 'Tsunami', 'Transportation Disruption', 'Tornado', 'Avalanche',
    'Oil Spill', 'Landslide', 'Sharknado'
]

var allCharitiesPromise;

const charities = db.collection('charities');

function getList() {
    return charities.get().then((querySnapshot) => {
        const documentsArray = [];
        querySnapshot.forEach((doc) => {
            documentsArray.push(doc.data());
        });
        console.log(documentsArray);
        allCharitiesPromise = documentsArray;
    });
}

getList();

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("filter-button").addEventListener("click", function () {
        var popup = document.getElementById("filter-popup");
        if (popup.style.display === "none") {
            popup.style.display = "block";
        } else {
            popup.style.display = "none";
        }

    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Cancel-Filters").addEventListener("click", function () {
        var popup = document.getElementById("filter-popup");
        popup.style.display = "none";
        event.preventDefault();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Apply-Filters").addEventListener("click", function () {
        var list_of_filters = getCheckedFilters();
        var filteredCharities = ListOfFilteredCards(list_of_filters, allCharitiesPromise);
        displayFilteredCards(filteredCharities);
        event.preventDefault();

    });
});


function getCheckedFilters() {
    var list_of_filters = document.getElementsByName("filter");
    var filters = [];
    for (var i = 0; i < list_of_filters.length; i++) {
        if (list_of_filters[i].checked) {
            console.log(list_of_filters[i]);
            filters.push(list_of_filters[i]);
        }
    }
    return filters;
}

function filterContinents(list_of_filters) {
    var ContinentFilters = [];
    for (var i = 0; i < list_of_filters.length; i++) {
        if (continents.includes(list_of_filters[i]['id'])) {
            ContinentFilters.push(list_of_filters[i]['id']);
        }
    }
    return ContinentFilters;
}

function filterEvents(list_of_filters) {
    var EventFilters = [];
    for (var i = 0; i < list_of_filters.length; i++) {
        if (events.includes(list_of_filters[i]['id'])) {
            EventFilters.push(list_of_filters[i]['id']);
        }
    }
    return EventFilters;
}

function ListOfFilteredCards(list_of_filters, allCharities) {
    list_of_filtered_charities = [];
    var continentFilters = filterContinents(list_of_filters);
    var EventFilters = filterEvents(list_of_filters);
    for (let i = 0; i < allCharities.length; i++) {
        if (continentFilters.length > 0) {
            if ((continentFilters.includes(allCharities[i].continent) || (continentFilters.includes(allCharities[i].Continent)))) {
                if (EventFilters.length > 0 && EventFilters.includes(allCharities[i].event)) {
                    list_of_filtered_charities.push(allCharities[i]);
                } else if (EventFilters.length == 0) {
                    list_of_filtered_charities.push(allCharities[i]);
                }
            }
        } else {
            if (EventFilters.length > 0 && EventFilters.includes(allCharities[i].event)) {
                list_of_filtered_charities.push(allCharities[i]);
            } else {
                list_of_filtered_charities.push(allCharities[i]);
            }
        }

    }
    return list_of_filtered_charities;
}


function displayFilteredCards(listOfCards) {
    $("#charities-go-here").empty();
    let cardTemplate = document.getElementById("charityCardTemplate");
    for (let i = 0; i < listOfCards.length; i++) {
        let newcard = cardTemplate.content.cloneNode(true);
        var title = listOfCards[i].name; // get value of the "name" key
        var details = listOfCards[i].details; // get value of the "details" key
        var charityCode = listOfCards[i].code; //get unique ID to each charity to be used for fetching right image
        var docID = listOfCards[i].id;
        var event = listOfCards[i].event;
        var Continent = listOfCards[i].continent;
        var imageType = listOfCards[i].imageType;
        var image = listOfCards[i].image; //get image from firestore storage
        if (imageType === 'code') {
            newcard.querySelector(".card-image").src = `./images/${charityCode}.jpg`;
        } else {
            newcard.querySelector(".card-image").src = image;
        }
        newcard.querySelector("a").href = "charity_description.html?docID=" + docID;

        //attach to gallery, Example: "hikes-go-here"
        document.getElementById("charities-go-here").appendChild(newcard);
    }

}