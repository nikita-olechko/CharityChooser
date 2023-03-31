var ImageFile;

function listenFileSelect() {
  var fileInput = document.getElementById("mypic-input");
  fileInput.addEventListener('change', function (e) {
    ImageFile = e.target.files[0];
  })
}
listenFileSelect();

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

async function savePost(event) {
  event.preventDefault();
  const charityName = document.getElementById("charity-name").value;
  const email = document.getElementById("email").value;
  const continent = document.getElementById("Continent").value;
  const eventType = document.getElementById("Event").value;
  const charityDescription = document.getElementById("charity-description").value;

  if (charityName && email && continent && eventType && charityDescription && ImageFile) {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        const charityData = {
          owner: user.uid,
          name: charityName,
          email: email,
          Continent: continent,
          event: eventType,
          details: charityDescription,
          last_updated: firebase.firestore.FieldValue.serverTimestamp()
        };

        const docRef = await firebase.firestore().collection("charities").add(charityData);
        // console.log("Test if function is being called")
        // console.log(ImageFile)
        const imageURL = await uploadImage(docRef.id);
        // console.log("Test if function is being called 2")
        await firebase.firestore().collection("charities").doc(docRef.id).update({ image: imageURL });
        // console.log("Image URL added to Firestore document", imageURL);

        alert("Charity information has been submitted!");
        document.getElementById("charity-registration-form").reset();
      } else {
        console.log("Error, no user signed in");
      }
    });
  }
}

document.getElementById("charity-registration-form").addEventListener("submit", savePost);
