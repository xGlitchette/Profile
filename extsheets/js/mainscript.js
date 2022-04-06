/* Open when someone clicks on the span element */
function openOverlay() {
    document.getElementById("profile").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeOverlay(overlay) {
    document.getElementById(overlay).style.width = "0%";
  }