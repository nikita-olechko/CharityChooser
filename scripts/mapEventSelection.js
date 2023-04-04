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

var allCharitiesPromise;

const eventsCollection = db.collection('events');

function getList() {
    return eventsCollection.get().then((querySnapshot) => {
        const documentsArray = [];
        querySnapshot.forEach((doc) => {
            documentsArray.push(doc.data());
        });
        allCharitiesPromise = documentsArray;
    });
}

getList();

console.log("mapEventSelection.js is running.");


function onEventSelection(event) {
    event.preventDefault();
    eventList = [];
    // docID = document.getElementsByName("eventButton").id
    console.log(docID)
    button = String(document.getElementsByName("eventButton").inner_html);
    console.log(button);
    for (let i = 0; i < button.length; i++) {
        let item = button[i].inner_html;
        console.log(item);
    }
    // allEventsPromise.forEach(function (item) {
    //     if (item.id == docID) {
    //         eventList.push(item);
    //     }
    // });
    // console.log($('#'+docID).val(docID));

}