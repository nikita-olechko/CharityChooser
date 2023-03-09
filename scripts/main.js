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
    name: "Food Banks Canada", //replace with your own city?
    city: "Burnaby",
    province: "BC",
    details:
      "Our mission is to relieve hunger today and prevent hunger tomorrow.",
    lat: 49.2467097082573,
    lng: -122.9187029619698,
    last_updated: firebase.firestore.FieldValue.serverTimestamp(), //current system time
  });
  CharitiesRef.add({
    code: "HOUSE01",
    name: "Inn from the Cold", //replace with your own city?
    city: "Anmore",
    province: "BC",
    details:
      "Inn from the Cold meets the needs of people who are homeless or at risk of becoming homeless. We work with the community and collaborate with our partners in supporting those with basic to complex needs in York Region.",
    lat: 49.3399431028579,
    lng: -122.85908496766939,
    last_updated: firebase.firestore.Timestamp.fromDate(
      new Date("March 10, 2022")
    ),
  });
  CharitiesRef.add({
    code: "SUPPLIES01",
    name: "Furniture Bank", //replace with your own city?
    city: "North Vancouver",
    province: "BC",
    details:
      "Furniture Bank aim to ensure good furniture and housewares end up back into the community to support getting children off the floor, and families established in a furnished home.",
    lat: 49.38847101455571,
    lng: -122.94092543551031,
    last_updated: firebase.firestore.Timestamp.fromDate(
      new Date("January 1, 2023")
    ),
  });
}       
