

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


function getFilters() {
    var list_of_filters = document.getElementsByName("filter");
    var filters = [];
    for (var i = 0; i < list_of_filters.length; i++) {
        if (list_of_filters[i].checked) {
            filters.push(list_of_filters[i].value);
        }
    }
    return filters;
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Apply-Filters").addEventListener("click", function () {
        var list_of_filters = document.getElementsByName("filter");
        var popup = document.getElementById("filter-popup");
        if (popup.style.display === "none") {
            popup.style.display = "block";
        } else {
            popup.style.display = "none";
        }
    });
});


function writeCharities() {
    //define a variable for the collection you want to create in Firestore to populate data
    var CharitiesRef = [];

    CharitiesRef.push({
        code: "HURRICANE01",
        name: "Hurricane Relief Fund",
        city: "Miami",
        Address: "123 Main St, Miami, FL, USA",
        zipcode: "12345",
        Continent: "North America",
        event: "Hurricane",
        url: "https://hurricanerelieffund.org/",
        details: "The Hurricane Relief Fund provides aid to communities affected by hurricanes. We work with local partners to provide emergency shelter, food, water, and medical supplies to those impacted by the storm.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    CharitiesRef.push({
        code: "CYCLONE01",
        name: "Cyclone Relief Network",
        city: "Bangladesh",
        Address: "456 High St, Dhaka, Bangladesh",
        zipcode: "12345",
        Continent: "Asia",
        event: "Cyclone",
        url: "https://cyclonereliefnetwork.org/",
        details: "The Cyclone Relief Network is a non-profit organization that provides assistance to communities affected by cyclones. We work with local partners to provide emergency shelter, food, water, and medical supplies to those impacted by the storm.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    CharitiesRef.push({
        code: "WILDFIRE01",
        name: "Wildfire Recovery Foundation",
        city: "Bangladesh",
        Address: "789 Oak St, Los Angeles, CA, USA",
        zipcode: "12345",
        Continent: "North America",
        event: "Wildfire",
        url: "https://wildfirerecoveryfoundation.org/",
        details: "The Wildfire Recovery Foundation provides aid to communities affected by wildfires. We work with local partners to provide emergency shelter, food, water, and medical supplies to those impacted by the disaster.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    CharitiesRef.push({
        code: "HANDS01",
        name: "Hands of Hope",
        city: "Chicago",
        Address: "1121 Main Street, Chicago, IL, USA",
        zipcode: "60605",
        Continent: "North America",
        url: "https://www.handsofhope.org/",
        event: "Earthquake",
        details: "Hands of Hope provides shelter and support to families who have been affected by natural disasters. Our team of volunteers work tirelessly to provide basic necessities and resources to those in need.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });

    CharitiesRef.push({
        code: "TREE01",
        name: "The Giving Tree",
        city: "Nashville",
        Address: "1234 Elm Street, Nashville, TN, USA",
        zipcode: "37201",
        event: "Landslide",
        Continent: "North America",
        url: "https://www.thegivingtree.org/",
        details: "The Giving Tree provides educational and health resources to underprivileged children and families in rural areas. Our programs aim to break the cycle of poverty and promote self-sufficiency.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    CharitiesRef.push({
        code: "SAVE01",
        name: "Children of the Andes",
        city: "Lima",
        Address: "Av. Simon Bolivar 123, Lima, Peru",
        zipcode: "37201",
        event: "Transportation Disruption",
        Continent: "South America",
        url: "https://www.childrenoftheandes.org/",
        details: "Children of the Andes is a non-profit organization that works to improve the lives of children and families living in poverty in the Andes Mountains region of Peru. We provide education, healthcare, and social services to help these communities break the cycle of poverty and achieve a brighter future.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    CharitiesRef.push({
        code: "WATER01",
        name: "WaterAid",
        city: "Lima",
        Address: "47-49 Durham Street, London SE11 5JD, UK",
        zipcode: "12345",
        Continent: "Africa",
        event: "Flood",
        url: "https://www.wateraid.org/",
        details: "WaterAid is an international charity that focuses on providing clean water, decent toilets, and good hygiene to people in some of the world's poorest countries. We work with local partners to help communities take control of their own water supply and sanitation.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    CharitiesRef.push({
        code: "DONATION01",
        name: "WWF",
        city: "Lima",
        Address: "Panda House, Weyside Park, Godalming, Surrey, GU7 1XR, UK",
        zipcode: "12345",
        Continent: "Europe",
        event: "Oil Spill",
        url: "https://www.worldwildlife.org/",
        details: "WWF is a global conservation organization that aims to protect endangered species, their habitats, and the natural resources we all depend on. We work with governments, businesses, and communities to find sustainable solutions to the environmental challenges we face.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    CharitiesRef.push({
        code: "GREEN01",
        name: "Greenpeace",
        city: "Lima",
        Address: "702 H Street NW, Suite 300, Washington, DC 20001, USA",
        zipcode: "12345",
        Continent: "North America",
        event: "Wildfire",
        url: "https://www.greenpeace.org/",
        details: "Greenpeace is an independent campaigning organization that uses peaceful protest and creative communication to expose environmental problems and promote solutions that are essential to a green and peaceful future. We investigate, document, and expose environmental abuses, and work to champion solutions.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    CharitiesRef.push({
        code: "SAVE02",
        name: "Save the Children",
        city: "Lima",
        Address: "St Vincent House, 30 Orange Street, London, WC2H 7HH, UK",
        zipcode: "12345",
        Continent: "South America",
        event: "Hurricane",
        url: "https://www.savethechildren.org/",
        details: "Save the Children is a global charity that works to ensure that all children have the chance to grow up healthy, educated, and safe. We work in some of the toughest places in the world to reach the most vulnerable children and provide life-saving support when they need it most.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    CharitiesRef.push({
        code: "CHARITY01",
        name: "Oxfam",
        city: "Lima",
        Address: "Oxfam House, John Smith Drive, Oxford, OX4 2JY, UK",
        zipcode: "12345",
        Continent: "Asia",
        event: "Cyclone",
        url: "https://www.oxfam.org/",
        details: "Oxfam is a global organization that works to end the injustice of poverty. We help people build better lives for themselves, advocate for their rights, and work to create lasting change. Our programs focus on tackling poverty and inequality, promoting human rights, and responding to emergencies and crises.",
        // last_updated: firebase.firestore.FieldValue.serverTimestamp(),
    });
    return CharitiesRef;
}

var CharitiesRef = writeCharities();
console.log(CharitiesRef[0]);



// const charities = db.collection("charities");
// console.log(charities)

function ListOfFilteredCards(allCharities, filterParams) {
    list_of_filtered_charities = [];
    // var allCharities = document.getElementById("charities-go-here");
    console.log(allCharities);
     allCharities.forEach((charity) => {
        if (charity.Continent == "Asia") {
            list_of_filtered_charities.push(charity);
            console.log(charity)
        }
        else{
            console.log("Not it: " + charity.name);
        }
     });

    // db.collection(collection)
    //     .get() //the collection called "charities"
    //     .then((allCharities) => {
    //         //var i = 1;  //Optional: if you want to have a unique ID for each hike
    //         allCharities.forEach((doc) => {
    //             //iterate thru each doc
    //             var title = doc.data().name; // get value of the "name" key
    //             var details = doc.data().details; // get value of the "details" key
    //             var charityCode = doc.data().code; //get unique ID to each charity to be used for fetching right image
    //             var docID = doc.id;
    //             var donationType = doc.data().type_of_donation;
    //             let newcard = cardTemplate.content.cloneNode(true);

    //             //update title and text and image
    //             newcard.querySelector(".card-title").innerHTML = title;
    //             newcard.querySelector(".card-text").innerHTML = details;
    //             newcard.querySelector(".card-type").innerHTML = donationType;
    //             newcard.querySelector(".card-image").src = `./images/${charityCode}.jpg`; //Example: NV01.jpg
    //             newcard.querySelector("a").href =
    //                 "charity_description.html?docID=" + docID;

                //Optional: give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery, Example: "hikes-go-here"
                // document.getElementById(collection + "-go-here").appendChild(newcard);

                //i++;   //Optional: iterate variable to serve as unique ID
        //     });
        // });
     return list_of_filtered_charities;
}

var ListOfFilteredCards = ListOfFilteredCards(CharitiesRef);
console.log(ListOfFilteredCards);