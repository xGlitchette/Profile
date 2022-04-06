/* Open when someone clicks on the span element */
function openOverlay(overlay) {
    document.getElementById(overlay).style.height = "100%";
    document.getElementById(overlay + 'Box').style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeOverlay(overlay) {
    document.getElementById(overlay).style.height = "0%";
    document.getElementById(overlay + 'Box').style.width = "0%";
  }