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
                  var userEmail = userDoc.data().email;
                  var userName = userDoc.data().name;
                  var userPhone = userDoc.data().phone;

                  //if the data fields are not empty, then write them in to the form.
                  if (userName != null) {
                      document.getElementById("name-input").value = userName;
                  }
                  if (userEmail != null) {
                      document.getElementById("email-input").value = userEmail;
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
  var userEmail = document.getElementById("email-input").value;
  var userPhone = document.getElementById("phone-input").value;

  currentUser.update({
      name: userName,
      email: userEmail,
      phone: userPhone
  })

  document.getElementById("input-fields").disabled = true;
}

//call the function to run it 
populateUserInfo();