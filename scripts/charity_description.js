function displayCharityInformation() {
  //retreive the documnent id from the url
  let params = new URL(window.location.href); // get the url from the search bar
  let ID = params.searchParams.get("docID");
  console.log(ID);

  //get the charity information from the database
  db.collection("charities")
    .doc(ID)
    .get()
    .then((thisCharity) => {
      charityInfo = thisCharity.data();
      charityCode = charityInfo.code;
      charityName = charityInfo.name;
      charityDetails = charityInfo.details;
      charityAddress = charityInfo.Address;
      charityZipcode = charityInfo.zipcode;
      charityURL = charityInfo.url;
      charityEvent = charityInfo.event;
      charityContinent = charityInfo.Continent;
      imageFromStorage = charityInfo.image;
      imageType = charityInfo.imageType;

      // populate charity information
      document.getElementById("charityName").innerHTML = charityName;
      document.getElementById("charityDetails").innerHTML = charityDetails;
      document.getElementById("charityAddress").innerHTML = charityAddress;
      document.getElementById("charityURL").innerHTML = charityURL;
      document.getElementById("charityContinent").innerHTML = charityContinent;
      document.getElementById("charityEvent").innerHTML = charityEvent;
      
      // populate the url
      let anchorTag = document.getElementById("charityURL");
      anchorTag.textContent = charityURL;
      anchorTag.href = charityURL;
      
      // populate image from storage
      console.log("hi")
      if (imageType === 'code') {
        let imgEvent = document.querySelector(".charity-img");
        imgEvent.src = "../images/" + charityCode + ".jpg";
      } else {
        let imgEvent = document.querySelector(".charity-img");
        imgEvent.src = imageFromStorage;
      }
      // let imgEvent = document.querySelector(".charity-img");
      // imgEvent.src = "../images/" + charityCode + ".jpg";
      document.getElementById("charityEvent").innerHTML = charityEvent;
      document.getElementById("charityContinent").innerHTML = charityContinent;
    });
}

displayCharityInformation();

function savePaymentDocumentIDAndRedirect() {
  let params = new URL(window.location.href); //get the url from the search bar
  let ID = params.searchParams.get("docID");
  localStorage.setItem("charityDocID", ID);
  window.location.href = "payment.html";
}
