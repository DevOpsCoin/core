// Dynamically load the header.html into the element with id="header-placeholder"
document.addEventListener("DOMContentLoaded", function() {
  fetch('assets/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header-placeholder').innerHTML = data;
    });
});
