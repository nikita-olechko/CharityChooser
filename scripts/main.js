function insertNameFromFirestore() {
  // to check if the user is logged in:
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user.uid); // let me to know who is the user that logged in to get the UID
      currentUser = db.collection("users").doc(user.uid); // will to to the firestore and go to the document of the user
      currentUser.get().then((userDoc) => {
        //get the user name
        var userName = userDoc.data().name;
        console.log(userName);
        //$("#name-goes-here").text(userName); //jquery
        document.getElementById("name-goes-here").innerText = userName;
      });
    }
  });
}
insertNameFromFirestore();

function writeCharities() {
  //define a variable for the collection you want to create in Firestore to populate data
  var CharitiesRef = db.collection("charities");

  CharitiesRef.add({
    code: "FOOD01",
    name: "Food Banks Canada",
    city: "Burnaby",
    province: "BC",
    details: "Our mission is to relieve hunger today and prevent hunger tomorrow.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(), //current system time
  });

  CharitiesRef.add({
    code: "HOUSE01",
    name: "Inn from the Cold",
    city: "Anmore",
    province: "BC",
    details: "Inn from the Cold meets the needs of people who are homeless or at risk of becoming homeless. We work with the community and collaborate with our partners in supporting those with basic to complex needs in York Region.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
  CharitiesRef.add({
    code: "SUPPLIES01",
    name: "Furniture Bank",
    city: "North Vancouver",
    province: "BC",
    details: "Furniture Bank aim to ensure good furniture and housewares end up back into the community to support getting children off the floor, and families established in a furnished home.",
    last_updated: firebase.firestore.FieldValue.serverTimestamp(),
  });
}

function writeEvents() {
  //define a variable for the collection you want to create in Firestore to populate data
  var eventsRef = db.collection("events");

  eventsRef.add({
    code: "CN02",
    name: "Flash Floods",
    continent: "Asia",
    country: "China",
    event: "Flood",
    details: "In July 2019, the central province of Henan in China experienced heavy rainfall that caused severe flooding. The flooding affected over 13 million people, destroyed homes and buildings, and resulted in the deaths of over 300 people.",
    date: "July 2019",
    lat: 33.8820,
    lng: 113.6140,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "RU03",
    name: "Wildfires",
    continent: "Europe",
    country: "Russia",
    event: "Wildfire",
    details: "In August 2021, wildfires broke out in the Siberian region of Russia. The wildfires were caused by a combination of lightning strikes, drought conditions, and human activity. The wildfires burned over 1 million hectares of land and caused significant air pollution in the region.",
    date: "August 2021",
    lat: 60.0000,
    lng: 105.0000,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "BD02",
    name: "River Erosion",
    continent: "Asia",
    country: "Bangladesh",
    event: "Flood",
    details: "In September 2022, the Brahmaputra River in Bangladesh experienced severe erosion due to heavy monsoon rains. The erosion caused several villages to be submerged and over 10,000 people were displaced.",
    date: "September 2022",
    lat: 26.7069,
    lng: 88.4303,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "AU04",
    name: "Heatwave",
    continent: "Australia",
    country: "Australia",
    event: "Heatwave",
    details: "In January 2023, a severe heatwave struck southeastern Australia, with temperatures soaring above 40°C for several consecutive days. The heatwave caused power outages and led to an increased risk of bushfires in the region.",
    date: "January 2023",
    lat: -37.8136,
    lng: 144.9631,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "NG03",
    name: "Oil Spill",
    continent: "Africa",
    country: "Nigeria",
    event: "Oil Spill",
    details: "In March 2016, an oil spill occurred in the Niger Delta region of Nigeria. The spill was caused by a pipeline leak and resulted in the contamination of several water bodies in the region, affecting the livelihoods of local fishermen and farmers.",
    date: "March 2016",
    lat: 4.8952,
    lng: 6.0548,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "JP05",
    name: "Heatwave in Tokyo",
    continent: "Asia",
    country: "Japan",
    event: "Heatwave",
    details: "In July 2017, Tokyo experienced an extreme heatwave with temperatures reaching over 40°C (104°F). The heatwave caused power outages and water shortages, and resulted in the deaths of over 200 people.",
    date: "July 2017",
    lat: 35.6895,
    lng: 139.6917,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "ID03",
    name: "Flooding in Jakarta",
    continent: "Asia",
    country: "Indonesia",
    event: "Flood",
    details: "In February 2019, heavy rainfall caused severe flooding in Jakarta. The flooding affected over 200,000 people and caused extensive damage to buildings and infrastructure.",
    date: "February 2019",
    lat: -6.2088,
    lng: 106.8456,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "CN10",
    name: "Landslide in Sichuan",
    continent: "Asia",
    country: "China",
    event: "Landslide",
    details: "In August 2022, a massive landslide occurred in Sichuan province, China. The landslide destroyed several villages and caused the deaths of over 100 people.",
    date: "August 2022",
    lat: 31.0424,
    lng: 103.3642,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "RU04",
    name: "Wildfires in Siberia",
    continent: "Asia",
    country: "Russia",
    event: "Wildfire",
    details: "In July 2022, massive wildfires broke out in Siberia, Russia. The wildfires burned over 10 million hectares of forest and caused the deaths of several people.",
    date: "July 2022",
    lat: 61.5240,
    lng: 105.3188,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "AU07",
    name: "Drought in New South Wales",
    continent: "Australia",
    country: "Australia",
    event: "Drought",
    details: "In January 2021, New South Wales, Australia experienced a severe drought. The drought caused widespread water shortages and crop failures, and resulted in significant economic losses for the region.",
    date: "January 2021",
    lat: -33.8688,
    lng: 151.2093,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "NG01",
    name: "Oil Spill in Niger Delta",
    continent: "Africa",
    country: "Nigeria",
    event: "Oil Spill",
    details: "In December 2021, a major oil spill occurred in the Niger Delta region of Nigeria. The oil spill caused significant environmental damage and affected the livelihoods of local communities.",
    date: "December 2021",
    lat: 4.8771,
    lng: 6.2026,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
  eventsRef.add({
    code: "CN02",
    name: "Yangtze River Floods",
    continent: "Asia",
    country: "China",
    event: "Flood",
    details: "In June 2023, heavy rainfalls in the Yangtze River basin caused massive flooding in several provinces of China, including Hubei, Anhui, and Jiangxi. The floods destroyed homes, buildings, and infrastructure, causing significant economic losses. Over 200 people were reported dead or missing.",
    date: "June 2023",
    lat: 30.7918,
    lng: 111.0044,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "JP02",
    name: "Typhoon Jebi",
    continent: "Asia",
    country: "Japan",
    event: "Typhoon",
    details: "In September 2018, Typhoon Jebi, the most powerful typhoon to hit Japan in 25 years, made landfall in western Japan. The typhoon caused widespread flooding and landslides, damaged infrastructure, and resulted in the deaths of at least 17 people.",
    date: "September 2018",
    lat: 34.6937,
    lng: 135.5023,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "ID02",
    name: "Java Earthquake",
    continent: "Asia",
    country: "Indonesia",
    event: "Earthquake",
    details: "In January 2021, a 6.2-magnitude earthquake struck the island of Java in Indonesia, killing at least 105 people and injuring hundreds more. The earthquake damaged thousands of buildings and left thousands of people homeless.",
    date: "January 2021",
    lat: -7.8166,
    lng: 110.4302,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "EG02",
    name: "Suez Canal Blockage",
    continent: "Africa",
    country: "Egypt",
    event: "Transportation disruption",
    details: "In March 2021, the container ship Ever Given ran aground in the Suez Canal, blocking the waterway for six days and causing a major disruption to global trade. The incident resulted in significant economic losses and highlighted the vulnerability of global supply chains.",
    date: "March 2021",
    lat: 30.0626,
    lng: 31.2497,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });

  eventsRef.add({
    code: "BR02",
    name: "Amazon Rainforest Fires",
    continent: "South America",
    country: "Brazil",
    event: "Wildfire",
    details: "In August 2019, large-scale wildfires broke out in the Amazon rainforest, leading to widespread destruction of the ecosystem and threatening the livelihoods of indigenous peoples and local communities. The fires were largely caused by deforestation and illegal land clearing.",
    date: "August 2019",
    lat: -5.019,
    lng: -54.0149,
    last_updated: firebase.firestore.FieldValue.serverTimestamp()
  });
}

// writeEvents();
//------------------------------------------------------------------------------
// Input parameter is a string representing the collection we are reading from
//------------------------------------------------------------------------------
function displayCardsDynamically(collection) {
let cardTemplate = document.getElementById("charityCardTemplate");

  db.collection(collection)
    .get() //the collection called "charities"
    .then((allCharities) => {
      //var i = 1;  //Optional: if you want to have a unique ID for each hike
      allCharities.forEach((doc) => {
        //iterate thru each doc
        var title = doc.data().name; // get value of the "name" key
        var details = doc.data().details; // get value of the "details" key
        var charityCode = doc.data().code; //get unique ID to each charity to be used for fetching right image
        var docID = doc.id;
        var donationType = doc.data().type_of_donation;
        let newcard = cardTemplate.content.cloneNode(true);

        //update title and text and image
        newcard.querySelector(".card-title").innerHTML = title;
        newcard.querySelector(".card-text").innerHTML = details;
        newcard.querySelector(".card-type").innerHTML = donationType;
        newcard.querySelector(".card-image").src = `./images/${charityCode}.jpg`; //Example: NV01.jpg
        newcard.querySelector("a").href =
          "charity_description.html?docID=" + docID;

        //Optional: give unique ids to all elements for future use
        // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
        // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
        // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

        //attach to gallery, Example: "hikes-go-here"
        document.getElementById(collection + "-go-here").appendChild(newcard);

        //i++;   //Optional: iterate variable to serve as unique ID
      });
    });
}

displayCardsDynamically("charities"); //input param is the name of the collection