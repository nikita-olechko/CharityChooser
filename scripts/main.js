function insertNameFromFirestore() {
  // to check if the user is logged in:
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid); // let me to know who is the user that logged in to get the UID
      currentUser = db.collection("users").doc(user.uid); // will to to the firestore and go to the document of the user
      currentUser.get().then((userDoc) => {
        //get the user name
        var userName = userDoc.data().name;
        console.log(userName);
        //$("#name-goes-here").text(userName); //jquery
        document.getElementById("name-goes-here").innerText = userName;
      });
    }
  });
}
insertNameFromFirestore();

function writeCharities() {
  //define a variable for the collection you want to create in Firestore to populate data
  var CharitiesRef = db.collection("charities");

  CharitiesRef.add({
    code: "FOOD01",
    name: "Food Banks Canada",
    city: "Burnaby",
    province: "BC",
    details: "Our mission is to relieve hunger today and prevent hunger tomorrow.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(), //current system time
  });

  CharitiesRef.add({
    code: "HOUSE01",
    name: "Inn from the Cold",
    city: "Anmore",
    province: "BC",
    details: "Inn from the Cold meets the needs of people who are homeless or at risk of becoming homeless. We work with the community and collaborate with our partners in supporting those with basic to complex needs in York Region.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  CharitiesRef.add({
    code: "SUPPLIES01",
    name: "Furniture Bank",
    city: "North Vancouver",
    province: "BC",
    details: "Furniture Bank aim to ensure good furniture and housewares end up back into the community to support getting children off the floor, and families established in a furnished home.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

function writeEvents() {
  //define a variable for the collection you want to create in Firestore to populate data
  var eventsRef = db.collection("events");

  eventsRef.add({
    code: "TR01",
    name: "Turkey and Syria Earthquakes", //replace with your own city?
    country: "Turkey",
    details: "A series of devastating earthquakes have damaged or destroyed thousands of homes in Turkey and Syria, leaving thousands of people homeless. The earthquakes have also caused landslides and damaged roads, making it difficult for aid to reach those in need.",
    date: "February 6th, 2023",
    lat: 49.2467097082573,
    lng: -122.9187029619698,
    last_updated: firebase.firestore.FieldValue.serverTimestamp() //current system time
  });
  eventsRef.add({
    code: "CA01",
    name: "Landslide Cascade Catastrophe",
    country: "Canada",
    details: "In November 2024, Vancouver was hit by a massive landslide known as 'Cascade Catastrophe'. The landslide was caused by heavy rainfall, and it resulted in significant damage to buildings and infrastructure. The landslide caused the deaths of over 30 people and left many injured.",
    date: "November 2024",
    lat: 49.2827,
    lng: -123.1207,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "SP01",
    name: "Spain Wildfires", //replace with your own city?
    country: "Spain",
    details: "Over 300,000 hectares have been scorched by wildfires in Spain, with the worst affected areas being in the south of the country. The fires have destroyed homes and forced thousands of people to evacuate.",
    date: "December 17th, 2022",
    lat: 49.2467097082573,
    lng: -122.9187029619698,
    last_updated: firebase.firestore.FieldValue.serverTimestamp() //current system time
  });
  eventsRef.add({
    code: "UK01",
    name: "War in Ukraine", //replace with your own city?
    country: "Ukraine",
    details: "On February 24th, 2022, Russia launched a military invasion of Ukraine. The invasion has resulted in the deaths of over 13,000 civilians and the displacement of over 8 million people.",
    date: "February 24th, 2022",
    lat: 49.2467097082573,
    lng: -122.9187029619698,
    last_updated: firebase.firestore.FieldValue.serverTimestamp() //current system time
  });
  eventsRef.add({
    code: "US01",
    name: "Hurricane Maximus",
    country: "USA",
    details: "On August 15th, 2022, Hurricane Maximus made landfall in Miami, Florida, causing widespread destruction and flooding. The hurricane resulted in the deaths of over 100 people and caused billions of dollars in damages.",
    date: "August 15th, 2022",
    lat: 25.7617,
    lng: -80.1918,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "AU01",
    name: "Heatwave Inferno",
    country: "Australia",
    details: "In January 2023, Sydney experienced a record-breaking heatwave dubbed 'Inferno'. The heatwave resulted in temperatures exceeding 45 degrees Celsius, causing widespread power outages and resulting in the deaths of over 50 people.",
    date: "January 2023",
    lat: -33.8688,
    lng: 151.2093,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "CA01",
    name: "Blizzard Avalanche",
    country: "Canada",
    details: "In December 2022, Toronto experienced a severe blizzard named 'Avalanche'. The blizzard resulted in heavy snowfall, power outages, and several traffic accidents. The blizzard caused the deaths of over 20 people.",
    date: "December 2022",
    lat: 43.6532,
    lng: -79.3832,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "GR01",
    name: "Wildfire Inferno",
    country: "Greece",
    details: "In August 2022, Athens experienced a catastrophic wildfire named 'Inferno'. The wildfire spread rapidly due to strong winds and hot temperatures, resulting in the deaths of over 60 people and the destruction of hundreds of homes and businesses.",
    date: "August 2022",
    lat: 37.9838,
    lng: 23.7275,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "US02",
    name: "Tornado Twister",
    country: "USA",
    details: "In May 2023, Oklahoma City was struck by a powerful tornado named 'Twister'. The tornado caused significant damage to buildings and infrastructure, resulting in the deaths of over 30 people and the displacement of thousands more.",
    date: "May 2023",
    lat: 35.4676,
    lng: -97.5164,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "BR01",
    name: "Wildfires Amazon Apocalypse",
    country: "Brazil",
    details: "In August 2024, the Amazon rainforest in Brazil was hit by a catastrophic wildfire known as 'Amazon Apocalypse'. The wildfires were the result of extreme heat and dry weather, destroying millions of hectares of forest and causing significant damage to biodiversity. The wildfires caused the deaths of many animals and displaced indigenous communities.",
    date: "August 2024",
    lat: -3.1190,
    lng: -60.0212,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "IN01",
    name: "Floods Deluge",
    country: "India",
    details: "In July 2022, Mumbai was hit by severe floods named 'Deluge'. The heavy rains resulted in overflowing rivers, causing significant damage to buildings and infrastructure. The floods caused the deaths of over 50 people and displaced millions.",
    date: "July 2022",
    lat: 19.0760,
    lng: 72.8777,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "ZA01",
    name: "Drought Desertification",
    country: "South Africa",
    details: "In October 2022, Cape Town experienced a severe drought named 'Desertification'. The drought resulted in water shortages, causing significant damage to agriculture and wildlife. The drought caused the deaths of over 10,000 animals and displaced several communities.",
    date: "October 2022",
    lat: -33.9249,
    lng: 18.4241,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
}

//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
  let cardTemplate = document.getElementById("charityCardTemplate");

  db.collection(collection)
    .get() //the collection called "charities"
    .then((allCharities) => {
      //var i = 1;  //Optional: if you want to have a unique ID for each hike
      allCharities.forEach((doc) => {
        //iterate thru each doc
        var title = doc.data().name; // get value of the "name" key
        var details = doc.data().details; // get value of the "details" key
        var charityCode = doc.data().code; //get unique ID to each charity to be used for fetching right image
        var docID = doc.id;
        var donationType = doc.data().type_of_donation;
        let newcard = cardTemplate.content.cloneNode(true);

        //update title and text and image
        newcard.querySelector(".card-title").innerHTML = title;
        newcard.querySelector(".card-text").innerHTML = details;
        newcard.querySelector(".card-type").innerHTML = donationType;
        newcard.querySelector(".card-image").src = `./images/${charityCode}.jpg`; //Example: NV01.jpg
        newcard.querySelector("a").href =
          "charity_description.html?docID=" + docID;

        //Optional: give unique ids to all elements for future use
        // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
        // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
        // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

        //attach to gallery, Example: "hikes-go-here"
        document.getElementById(collection + "-go-here").appendChild(newcard);

        //i++;   //Optional: iterate variable to serve as unique ID
      });
    });
}

displayCardsDynamically("charities"); //input param is the name of the collection