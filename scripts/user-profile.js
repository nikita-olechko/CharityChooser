var currentUser;
var donationHistory;

function populateUserInfo() {
  firebase.auth().onAuthStateChanged(user => {
      // Check if user is signed in:
      if (user) {

          //go to the correct user document by referencing to the user uid
          currentUser = db.collection("users").doc(user.uid)
          //get the document for current user.
          currentUser.get()
              .then(userDoc => {
                  //get the data fields of the user
                  var userCountry = userDoc.data().country;
                  var userName = userDoc.data().name;
                  var userPhone = userDoc.data().phone;

                  //if the data fields are not empty, then write them in to the form.
                  if (userName != null) {
                      document.getElementById("name-input").value = userName;
                  }
                  if (userCountry != null) {
                      document.getElementById("country-input").value = userCountry;
                  }
                  if (userPhone != null) {
                      document.getElementById("phone-input").value = userPhone;
                  }
                  donationHistory = userDoc.data().donationHistory; // get the donated charity reference
                  const donationHistoryList = document.getElementById("donation-history");

                    // for each charity reference, get the charity name and create a link to the charity description page
                  donationHistory.forEach(charityDocID => {
                    console.log(charityDocID);
                    const charityLink = document.createElement("a");
                    charityLink.href = "charity_description.html?docID=" + charityDocID;
                    console.log(charityLink)
                    db.collection("charities").doc(charityDocID).get()
                      .then(charityDoc => {
                        const charityName = charityDoc.data().name;
                        console.log(charityName)
                        charityLink.textContent = charityName;
                        donationHistoryList.appendChild(charityLink);
                        donationHistoryList.appendChild(document.createElement("br"));
                        console.log(donationHistoryList)
                    }).catch(error => {
                        console.log(error);
                    });                  
                });
            }).catch(error => {
                console.log(error);
            });
      } else {
          console.log ("No user is signed in");
      }
  });
}

// Log out the user and redirect to sign in page
function logout() {
  firebase.auth().signOut().then(function() {
      window.location.href = "index.html";
  }).catch(function(error) {
      console.log("Error signing out");
  });
}

// Enable the user to edit their profile information
function editUserInfo() {
  document.getElementById("name-input").disabled = false;
  document.getElementById("country-input").disabled = false;
  document.getElementById("phone-input").disabled = false;

  console.log("edit button clicked");
}

// Save the user's profile information
function saveUserInfo() {
  var userName = document.getElementById("name-input").value;
  var userCountry = document.getElementById("country-input").value;
  var userPhone = document.getElementById("phone-input").value;
  console.log("save button clicked")

    //update the user document with the new information
  currentUser.update({
      name: userName,
      country: userCountry,
      phone: userPhone
  })
  document.getElementById("name-input").disabled = true;
  document.getElementById("country-input").disabled = true;
  document.getElementById("phone-input").disabled = true;
}

// display/close the modal
const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

populateUserInfo();