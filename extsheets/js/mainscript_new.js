function openBox(overlay) {
    document.getElementById('home').style.display = "none";
    document.getElementById(overlay).style.display = "block";
    document.getElementById('box').style.height = "640px";
}

function closeBox(overlay) {
    document.getElementById('home').style.display = "block";
    document.getElementById(overlay).style.display = "none";
    document.getElementById('box').style.height = "320px";
}