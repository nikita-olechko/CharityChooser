const eventsCollection = db.collection('events');
const charitiesCollection = db.collection('charities');

function getEventID() {
    const url = window.location.href;
    const eventID = url.split('id=')[1];
    return eventID;
}

async function getEventContinentAndEvent(eventID) {
    try {
        const eventDoc = await eventsCollection.doc(eventID).get();
        const eventData = eventDoc.data();
        return {
            continent: eventData.continent,
            event: eventData.event
        };
    } catch (error) {
        console.error('Error fetching event data:', error);
    }
}

async function getCharitiesByContinentAndEvent(continent, event) {
    try {
        const querySnapshot = await charitiesCollection
            .where('continent', '==', continent)
            .where('event', '==', event)
            .get();

        const charities = [];
        querySnapshot.forEach((doc) => {
            charities.push({
                id: doc.id,
                data: doc.data()
            });
        });
        return charities;
    } catch (error) {
        console.error('Error fetching charities:', error);
    }
}

async function displayCardsDynamically(collection) {
    const cardTemplate = document.getElementById("charityCardTemplate");
    const cardsContainer = document.getElementById(collection + "-go-here");

    const querySnapshot = await db.collection(collection).get();
    querySnapshot.forEach((doc) => {
        const {
            name,
            details,
            code,
            event,
            continent,
            imageType,
            image,
        } = doc.data();

        const newCard = cardTemplate.content.cloneNode(true);
        newCard.querySelector(".card-title").innerHTML = name;
        newCard.querySelector(".card-event").innerHTML = event;
        newCard.querySelector(".card-text").innerHTML = details;
        newCard.querySelector("a").href = `charity_description.html?docID=${doc.id}`;

        if (imageType === "code") {
            newCard.querySelector(".card-image").src = `./images/${code}.jpg`;
        } else {
            newCard.querySelector(".card-image").src = image;
        }

        cardsContainer.appendChild(newCard);
    });
}

(async () => {
    const eventID = getEventID();
    const {
        continent,
        event
    } = await getEventContinentAndEvent(eventID);
    const charities = await getCharitiesByContinentAndEvent(continent, event);

    // Create a temporary collection to store filtered charities
    const tempCollectionName = "filteredCharities";
    const batch = db.batch();
    charities.forEach((charity) => {
        const docRef = db.collection(tempCollectionName).doc(charity.id);
        batch.set(docRef, charity.data);
    });
    await batch.commit();

    displayCardsDynamically(tempCollectionName);
})();