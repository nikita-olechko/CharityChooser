const registerLink = document.querySelector('.footer-link[href="./register.html"]');
const newsletterSection = document.querySelector('.newsletter');
const newsLetterItemsToHide = newsletterSection.querySelectorAll('.hideAfterSub');
const subscribeFeedback = document.querySelector('#subscribe-feedback');

// tell user to log in first if they try to register without being logged in
registerLink.addEventListener('click', function(event) {
  if (!firebase.auth().currentUser) {
    event.preventDefault();
    registerLink.parentNode.querySelector('#login-feedback').style.display = 'block'; 
  }
});

newsletterSection.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('form5Example2');
  const email = emailInput.value.trim();

  if (email !== '') {
    for (let i=0; i < newsLetterItemsToHide.length; i++) {
      newsLetterItemsToHide[i].style.display = 'none';
    }
    subscribeFeedback.innerHTML = "You've subscribed to our newsletter!";
    subscribeFeedback.style.padding = '1rem';
    console.log("test")
    emailInput.value = '';
  } 
});
