document.getElementById("filter-button").addEventListener("click", function () {
    var popup = document.getElementById("filter-popup");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
});
