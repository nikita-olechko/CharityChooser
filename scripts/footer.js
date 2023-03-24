// subscribe form and Register New Charity link references
const subscribeForm = document.querySelector('form');
const registerLink = document.querySelector('.footer-link[href="./register.html"]');

// click event listener to the subscribe button
subscribeForm.addEventListener('submit', function(event) {
  if (!firebase.auth().currentUser) {
    event.preventDefault();
    console.log("User is not logged in")
    subscribeForm.querySelector('#login-feedback').style.display = 'block'; 
  }
});

// click event listener to the Register New Charity link
registerLink.addEventListener('click', function(event) {
  if (!firebase.auth().currentUser) {
    event.preventDefault();
    registerLink.parentNode.querySelector('#login-feedback').style.display = 'block'; 
  }
});
