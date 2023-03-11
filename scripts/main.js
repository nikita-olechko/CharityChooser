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
    lat: 49.2467097082573,
    lng: -122.9187029619698,
    last_updated: firebase.firestore.FieldValue.serverTimestamp(), //current system time
  });
  CharitiesRef.add({
    code: "HOUSE01",
    name: "Inn from the Cold",
    city: "Anmore",
    province: "BC",
    details: "Inn from the Cold meets the needs of people who are homeless or at risk of becoming homeless. We work with the community and collaborate with our partners in supporting those with basic to complex needs in York Region.",
    lat: 49.3399431028579,
    lng: -122.85908496766939,
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  CharitiesRef.add({
    code: "SUPPLIES01",
    name: "Furniture Bank",
    city: "North Vancouver",
    province: "BC",
    details: "Furniture Bank aim to ensure good furniture and housewares end up back into the community to support getting children off the floor, and families established in a furnished home.",
    lat: 49.38847101455571,
    lng: -122.94092543551031,
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
}

writeEvents();
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
        let newcard = cardTemplate.content.cloneNode(true);

        //update title and text and image
        newcard.querySelector(".card-title").innerHTML = title;
        newcard.querySelector(".card-text").innerHTML = details;
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