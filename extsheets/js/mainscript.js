/* Open when someone clicks on the span element */
function openOverlay(overlay) {
    document.getElementById('MainBox').style.width = "0%";
    document.getElementById('MainBox').style.opacity = "0";
    document.getElementById(overlay + 'Box').style.width = "100%";
    document.getElementById(overlay).style.opacity = "1";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeOverlay(overlay) {
    document.getElementById('MainBox').style.width = "100%";
    document.getElementById('MainBox').style.opacity = "1";
    document.getElementById(overlay + 'Box').style.width = "0%";
    document.getElementById(overlay).style.opacity = "0";
  }