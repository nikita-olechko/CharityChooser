
function writeEvents() {
    //define a variable for the collection you want to create in Firestore to populate data
    var eventsRef = db.collection("events");
    eventsRef.add({
        code: "US10",
        name: "Tornado Outbreak in the Midwest",
        continent: "North America",
        country: "United States",
        event: "Tornado",
        details: "In April 2021, a series of severe thunderstorms spawned multiple tornadoes across several states in the Midwest. The tornado outbreak caused significant damage to homes, businesses, and infrastructure, and resulted in several fatalities and injuries.",
        date: "April 2021",
        lat: 41.8781,
        lng: -87.6298,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    eventsRef.add({
        code: "US11",
        name: "Hurricane Harvey",
        continent: "North America",
        country: "United States",
        event: "Hurricane",
        details: "In August 2017, Hurricane Harvey made landfall in Texas, causing catastrophic flooding and severe damage to infrastructure and homes. The hurricane resulted in over 100 fatalities and billions of dollars in damages.",
        date: "August 2017",
        lat: 29.7604,
        lng: -95.3698,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    eventsRef.add({
        code: "CA07",
        name: "Alberta Wildfires",
        continent: "North America",
        country: "Canada",
        event: "Wildfire",
        details: "In May 2016, a massive wildfire broke out in the Fort McMurray area of Alberta, Canada. The wildfire burned over 1.4 million acres of land, destroyed thousands of homes, and forced the evacuation of over 80,000 people. The fire caused no fatalities, but resulted in billions of dollars in damages.",
        date: "May 2016",
        lat: 56.7261,
        lng: -111.3807,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    eventsRef.add({
        code: "US12",
        name: "Ice Storm in Texas",
        continent: "North America",
        country: "United States",
        event: "Ice Storm",
        details: "In February 2021, Texas experienced an unprecedented winter storm that brought freezing temperatures and ice storms to the state. The storm caused widespread power outages, water shortages, and resulted in dozens of fatalities.",
        date: "February 2021",
        lat: 30.2672,
        lng: -97.7431,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    eventsRef.add({
        code: "CA08",
        name: "British Columbia Heat Wave",
        continent: "North America",
        country: "Canada",
        event: "Heat Wave",
        details: "In June 2021, British Columbia experienced a record-breaking heat wave that shattered temperature records across the province. The extreme heat caused numerous fatalities, power outages, and infrastructure damage.",
        date: "June 2021",
        lat: 49.2827,
        lng: -123.1207,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    eventsRef.add({
        code: "MX04",
        name: "Hurricane Azul",
        country: "Mexico",
        event: "Hurricane",
        details: "In August 2022, Hurricane Azul made landfall on the Pacific coast of Mexico. The category 4 hurricane brought heavy rains and winds, resulting in widespread flooding and power outages. The hurricane caused significant damage to homes, businesses, and infrastructure, and resulted in at least 17 fatalities.",
        date: "August 2022",
        lat: 16.7464,
        lng: -99.7534,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    eventsRef.add({
        code: "US16",
        name: "Hurricane Delta",
        country: "United States",
        event: "Hurricane",
        details: "In October 2020, Hurricane Delta made landfall in Louisiana, United States. The category 2 hurricane brought heavy rain and winds, causing widespread power outages and damage to homes and businesses. The hurricane resulted in at least 6 fatalities.",
        date: "October 2020",
        lat: 29.9511,
        lng: -90.0715,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    eventsRef.add({
        code: "US17",
        name: "Hurricane Ida",
        country: "United States",
        event: "Hurricane",
        details: "In August 2021, Hurricane Ida made landfall in Louisiana, United States. The category 4 hurricane brought heavy rain and winds, causing widespread flooding and power outages. The hurricane resulted in at least 96 fatalities.",
        date: "August 2021",
        lat: 29.9511,
        lng: -90.0715,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    eventsRef.add({
        code: "JP03",
        name: "Tokyo Earthquake",
        continent: "Asia",
        country: "Japan",
        event: "Earthquake",
        details: "On August 20, 2021, Tokyo was hit by a magnitude 6.0 earthquake. The earthquake caused minor damage to buildings and infrastructure and resulted in several injuries.",
        date: "August 20, 2021",
        lat: 35.6762,
        lng: 139.6503,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    eventsRef.add({
        code: "MX04",
        name: "Oaxaca Earthquake",
        continent: "North America",
        country: "Mexico",
        event: "Earthquake",
        details: "On February 16, 2022, Oaxaca was hit by a magnitude 6.5 earthquake. The earthquake caused significant damage to buildings and infrastructure and resulted in multiple casualties and injuries.",
        date: "February 16, 2022",
        lat: 16.8933,
        lng: -96.8325,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

    eventsRef.add({
        code: "ID06",
        name: "Sulawesi Earthquake",
        continent: "Asia",
        country: "Indonesia",
        event: "Earthquake",
        details: "On January 15, 2023, Sulawesi was hit by a magnitude 7.0 earthquake. The earthquake caused widespread damage to buildings and infrastructure and resulted in numerous casualties and injuries.",
        date: "January 15, 2023",
        lat: -1.4754,
        lng: 120.8431,
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });

}

writeEvents();