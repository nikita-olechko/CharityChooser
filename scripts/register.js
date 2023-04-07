var ImageFile;

// listen for image file selection
function listenFileSelect() {
  var fileInput = document.getElementById("mypic-input");
  fileInput.addEventListener('change', function (e) {
    ImageFile = e.target.files[0];
  })
}
listenFileSelect();

// upload image to Firebase Storage and return the image URL
async function uploadImage(docId) {
  if (ImageFile) {
    const fileExtension = ImageFile.name.split(".").pop(); // get file extension
    const storageRef = firebase.storage().ref("images/" + docId + fileExtension);
    console.log("Uploading image:", ImageFile.name); // print message
    await storageRef.put(ImageFile);
    const imageURL = await storageRef.getDownloadURL();
    console.log("Image uploaded, URL:", imageURL);
    return imageURL;
  }
  return null;
}

// reference values from the registration form
async function savePost(event) {
  event.preventDefault();
  const charityName = document.getElementById("charity-name").value;
  const email = document.getElementById("email").value;
  const continent = document.getElementById("Continent").value;
  const eventType = document.getElementById("Event").value;
  const charityDescription = document.getElementById("charity-description").value;
  const address = document.getElementById("address").value;

  if (charityName && email && continent && eventType && charityDescription && ImageFile) {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        const charityData = {
          Address : address,
          owner: user.uid,
          name: charityName,
          email: email,
          Continent: continent,
          event: eventType,
          details: charityDescription,
          url: `https://${charityName}.org/`,
          last_updated: firebase.firestore.FieldValue.serverTimestamp()
        };

        // add charity data to charity collection
        const docRef = await firebase.firestore().collection("charities").add(charityData);
        const imageURL = await uploadImage(docRef.id);
        await firebase.firestore().collection("charities").doc(docRef.id).update({ image: imageURL });

        // redirect to registration completed page and reset the form
        alert("Charity information has been submitted!");
        document.getElementById("charity-registration-form").reset();
        window.location.href="registration_completed.html"
      } else {
        console.log("Error, no user signed in");
      }
    });
  }
}

document.getElementById("charity-registration-form").addEventListener("submit", savePost);
