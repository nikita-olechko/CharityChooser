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

var allEventsPromise;

const eventsCollection = db.collection('events');
console.log(eventsCollection);

function getList() {
    return eventsCollection.get().then((querySnapshot) => {
        const documentsArray = [];
        querySnapshot.forEach((doc) => {
            documentsArray.push(doc.data());
        });
        console.log(documentsArray);
        allEventsPromise = documentsArray;
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
        var filteredCharities = ListOfFilteredCards(list_of_filters, allEventsPromise);
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
            if (continentFilters.includes(allCharities[i].Continent)) {
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


// MAPBOX DISPLAY
function showFilteredEventsOnMap() {
    // Defines basic mapbox data
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhbWNoZW4zIiwiYSI6ImNsMGZyNWRtZzB2angzanBjcHVkNTQ2YncifQ.fTdfEXaQ70WoIFLZ2QaRmQ';
    const map = new mapboxgl.Map({
        container: 'map', // Container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Styling URL
        center: [-122.964274, 49.236082], // Starting position
        zoom: 8 // Starting zoom
    });

    // Add user controls to map
    map.addControl(new mapboxgl.NavigationControl());

    // Adds map features
    map.on('load', () => {
        const features = []; // Defines an empty array for information to be added to

        // Defines map pin icon
        map.loadImage(
            'https://cdn.iconscout.com/icon/free/png-256/pin-locate-marker-location-navigation-16-28668.png',
            (error, image) => {
                if (error) throw error;

                // Add the image to the map style.
                map.addImage('eventpin', image); // Pin Icon

                // READING information from "events" collection in Firestore
                db.collection("events").get().then(allEvents => {
                    allEvents.forEach(doc => {
                        // get hike Coordinates
                        lat = doc.data().lat;
                        lng = doc.data().lng;
                        console.log(lat, lng);
                        coordinates = [lng, lat];
                        console.log(coordinates);
                        //read name and the details of hike
                        event_name = doc.data().name; // Event Name
                        preview = doc.data().details; // Text Preview


                        // Pushes information into the features array
                        features.push({
                            'type': 'Feature',
                            'properties': {
                                'description': `<strong>${event_name}</strong><p>${preview}</p> <br> <a href="/main.html?id=${doc.id}" target="" title="Opens in a new window"><button class="button btn btn-success card-href">Find Charities</button></a>`
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': coordinates
                            }
                        });
                    })

                    // Adds features as a source to the map
                    map.addSource('places', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': features
                        }
                    });

                    // Creates a layer above the map displaying the pins
                    map.addLayer({
                        'id': 'places',
                        'type': 'symbol',
                        'source': 'places',
                        'layout': {
                            'icon-image': 'eventpin', // Pin Icon
                            'icon-size': 0.1, // Pin Size
                            'icon-allow-overlap': true // Allows icons to overlap
                        }
                    });

                    // Map On Click function that creates a popup, displaying previously defined information from "events" collection in Firestore
                    map.on('click', 'places', (e) => {
                        // Copy coordinates array.
                        const coordinates = e.features[0].geometry.coordinates.slice();
                        const description = e.features[0].properties.description;

                        // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
                        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                        }

                        new mapboxgl.Popup()
                            .setLngLat(coordinates)
                            .setHTML(description)
                            .addTo(map);
                    });

                    // Change the cursor to a pointer when the mouse is over the places layer.
                    map.on('mouseenter', 'places', () => {
                        map.getCanvas().style.cursor = 'pointer';
                    });

                    // Defaults cursor when not hovering over the places layer
                    map.on('mouseleave', 'places', () => {
                        map.getCanvas().style.cursor = '';
                    });
                })

            });
    })
}