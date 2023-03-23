var charityDocID = localStorage.getItem("charityDocID"); //visible to all functions on this page

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

function writePayment() {
  console.log("inside write payment");
  let Firstname = document.getElementById("firstName").value;
  let Lastname = document.getElementById("lastName").value;
  let Email = document.getElementById("email").value;
  let Address = document.getElementById("address").value;
  let Address2 = document.getElementById("address2").value;
  let Country = document.getElementById("country").value;
  let State = document.getElementById("state").value;
  let Postal = document.getElementById("postal").value;
  let SaveAddress = document.querySelector(
    'input[name="save_info"]:checked'
  ).value;
  let PaymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  ).value;
  let CC_name = document.getElementById("cc_name").value;
  let CC_number = document.getElementById("cc_number").value;
  let CC_cvv = document.getElementById("cc_cvv").value;

  console.log(
    Firstname,
    Lastname,
    Email,
    Address,
    Address2,
    Country,
    State,
    Postal,
    SaveAddress,
    PaymentMethod
  );

  firebase.auth().onAuthStateChanged((user) => {
    // check who's logged in. so it is a boolean
    if (user) {
      var currentUser = db.collection("users").doc(user.uid);
      var userID = user.uid;
      //get the document for current user.
      currentUser.get().then((userDoc) => {
        var userEmail = userDoc.data().email;
        db.collection("payment")
          .add({
            charityDocID: charityDocID,
            userID: userID,
            firstName: Firstname,
            lastName: Lastname,
            email: Email,
            address: Address,
            address2: Address2,
            country: Country,
            state: State,
            postal: Postal,
            save_info: SaveAddress,
            paymentMethod: PaymentMethod,
            cc_name: CC_name,
            cc_number: CC_number,
            cc_cvv: CC_cvv,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            window.location.href = "payment_completed.html";
          });
      });
    } else {
      console.log("No user is signed in");
      window.location.href = "payment.html";
    }
  });
}
