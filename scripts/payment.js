var charityDocID = localStorage.getItem("charityDocID"); //visible to all functions on this page

// Get the charity name from the charities collection
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


// initialize the donation form
function setupDonationAmountButtons() {
  const donationButtons = document.querySelectorAll(".donation-amount");
  const donationOtherButton = document.querySelector(".donation-amount-other");
  const donationInput = document.querySelector(".donation-amount-input");

  // Add event listeners to the donation buttons
  donationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const amount = button.getAttribute("data-amount");
      donationInput.value = "$" + amount;
      donationInput.disabled = true;
    });
  });

  // Add event listener to the other button
  donationOtherButton.addEventListener("click", () => {
    donationInput.value = "";
    donationInput.disabled = false;
  });

  // Add event listener to the input field to format value with dollar sign and check for 0 value
  donationInput.addEventListener("input", () => {
    const value = donationInput.value;
    if (value.length > 0) {
      if (!value.startsWith("$")) {
        donationInput.value = "$" + value;
      }
      if (parseFloat(value) === 0) {
        alert("Please enter at least $1.");
      }
    }
  });
}
setupDonationAmountButtons();

// Write payment information to the database
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
  let SaveAddress = document.querySelector('input[name="save_info"]:checked').value;
  let PaymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  ).value;
  let CC_name = document.getElementById("card_name").value;
  let CC_number = document.getElementById("card_number").value;
  let CC_cvv = document.getElementById("card_cvv").value;
  let CC_expiration = document.getElementById("card_expiration").value;
  let donationAmount = document.getElementById("donationAmount").value;

  // Log the values to the console
  console.log(
    Firstname, Lastname, Email, Address, Address2, Country, State, Postal, PaymentMethod
  );

  // Check if required fields are empty
  if (
    Firstname === "" ||
    Lastname === "" ||
    Address === "" ||
    Country === "" ||
    Postal === "" ||
    PaymentMethod === "" ||
    CC_name === "" ||
    CC_number === "" ||
    CC_cvv === "" ||
    CC_expiration === ""
  ) {
    alert("Please fill in all required information.");
    return;
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var currentUser = db.collection("users").doc(user.uid);
      var userID = user.uid;
      //get the document for current user
      currentUser.get().then((userDoc) => {
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
            card_name: CC_name,
            card_number: CC_number,
            card_cvv: CC_cvv,
            card_expiration: CC_expiration,
            donation_amount: donationAmount,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => {
            currentUser.update({
              donationHistory: firebase.firestore.FieldValue.arrayUnion(charityDocID)
            })
            .then(() => {
            window.location.href = "payment_completed.html";
            })
          });
      });
    } else {
      console.log("No user is signed in");
      window.location.href = "payment.html";
    }
  });
}
