const IconTemplate = document.querySelector("")

function getDataFromFirestore() {
  const db = firebase.firestore();
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
  });
}