document.getElementById('logoutButton').addEventListener('click', function () {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    window.location.href = 'login.html';
  }).catch((error) => {
    // An error happened.
    console.error('Error signing out:', error);
  });
});
