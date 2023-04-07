console.log("donation completed!");

// Get the charity document ID from local storage
var charityDocID = localStorage.getItem("charityDocID"); //visible to all functions on this page

// Get the charity name from the charity document
function getCharityName(id) {
  db.collection("charities")
    .doc(id)
    .get()
    .then((thisCharity) => {
      var charityName = thisCharity.data().name;
      document.getElementById("charityName").innerHTML = charityName;
    });
}

getCharityName(charityDocID);
