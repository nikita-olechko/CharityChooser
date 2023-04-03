//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
//--------------------------------------------
const continents = [
    'North America', 'South America', 'Africa', 'Europe', 'Asia', 'Australia'
]

const events = [
    'Hurricane', 'Earthquake', 'Flood', 'Heat Wave', 'Wildfire', 'Drought',
    'Cyclone', 'Tsunami', 'Transportation Disruption', 'Tornado', 'Avalanche',
    'Oil Spill', 'Landslide', 'Sharknado'
]

var allEventsPromise;

const eventsCollection = db.collection('events');
console.log(eventsCollection);

function getList() {
    return eventsCollection.get().then((querySnapshot) => {
        const documentsArray = [];
        querySnapshot.forEach((doc) => {
            documentsArray.push(doc.data());
        });
        console.log(documentsArray);
        allEventsPromise = documentsArray;
    });
}

console.log("mapEventSelection.js is running.");


function onEventSelection() {
    event.preventDefault();
    
}