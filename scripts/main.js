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
    details:
      "Our mission is to relieve hunger today and prevent hunger tomorrow.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(), //current system time
  });
  CharitiesRef.add({
    code: "HOUSE01",
    name: "Inn from the Cold",
    city: "Anmore",
    province: "BC",
    details:
      "Inn from the Cold meets the needs of people who are homeless or at risk of becoming homeless. We work with the community and collaborate with our partners in supporting those with basic to complex needs in York Region.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  CharitiesRef.add({
    code: "SUPPLIES01",
    name: "Furniture Bank",
    city: "North Vancouver",
    province: "BC",
    details:
      "Furniture Bank aim to ensure good furniture and housewares end up back into the community to support getting children off the floor, and families established in a furnished home.",
    lat: 49.38847101455571,
    lng: -122.94092543551031,
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
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
