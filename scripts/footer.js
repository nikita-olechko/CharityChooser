const registerLink = document.querySelector('.footer-link[href="./register.html"]');
const newsletterSection = document.querySelector('.newsletter');
const newsLetterItemsToHide = newsletterSection.querySelectorAll('.hideAfterSub');
const subscribeFeedback = document.querySelector('#subscribe-feedback');

// tell user to log in first if they click register new charity without being logged in
registerLink.addEventListener('click', function(event) {
  if (!firebase.auth().currentUser) {
    event.preventDefault();
    registerLink.parentNode.querySelector('#login-feedback').style.display = 'block'; 
  }
}); 

// listen for submit button click
newsletterSection.addEventListener('submit', function(event) {
  event.preventDefault();
  // get email value
  const emailInput = document.getElementById('form5Example2');
  const email = emailInput.value.trim();

  // check if email is valid, if so, hide newsletter section and show feedback
  if (email !== '') {
    for (let i=0; i < newsLetterItemsToHide.length; i++) {
      newsLetterItemsToHide[i].style.display = 'none';
    } 
    subscribeFeedback.innerHTML = "You've subscribed to our newsletter!";
    console.log("test")
    emailInput.value = '';
  } 
});
