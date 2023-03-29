const registerLink = document.querySelector('.footer-link[href="./register.html"]');

// click event listener to the Register New Charity link
registerLink.addEventListener('click', function(event) {
  if (!firebase.auth().currentUser) {
    event.preventDefault();
    registerLink.parentNode.querySelector('#login-feedback').style.display = 'block'; 
  }
});
