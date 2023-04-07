//---------------------------------------------------
// This function loads the parts of your skeleton
// (navbar, footer, and other things) into html doc.
//---------------------------------------------------
function loadSkeleton() {
  firebase.auth().onAuthStateChanged(function (user) {
      console.log($("#navbarPlaceholder").load("./text/navbar.html"));
      console.log($("#footerPlaceholder").load("./text/footer.html"));
  });
}
loadSkeleton(); //invoke the function
