var currentUser;

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
              })
      } else {
          // No user is signed in.
          console.log ("No user is signed in");
      }
  });
}

function editUserInfo() {
  document.getElementById("input-fields").disabled = false;
}

function saveUserInfo() {
  var userName = document.getElementById("name-input").value;
  var userCountry = document.getElementById("country-input").value;
  var userPhone = document.getElementById("phone-input").value;

  currentUser.update({
      name: userName,
      country: userCountry,
      phone: userPhone
  })

  document.getElementById("input-fields").disabled = true;
}

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

//call the function to run it 
populateUserInfo();
