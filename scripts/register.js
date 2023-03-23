// Get reference to submit button
const submitButton = document.getElementById("submit-button");

// Add event listener to submit button
submitButton.addEventListener("click", (event) => {
  // Prevent form from submitting and page from refreshing
  event.preventDefault();

  // Get values from form fields
  const charityName = document.getElementById("charity-name").value;
  const email = document.getElementById("email").value;
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;
  const description = document.getElementById("charity-description").value;

  // Create new document in "charities" collection
  db.collection("charities").add({
    name: charityName,
    email: email,
    country: country,
    city: city,
    details: description
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    window.location.href = "success.html";
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
});
