if (currentMenu != home) {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        closeBox();
    };
}

function openBox(overlay) {
    let currentMenu = overlay;
    document.getElementById('home').style.display = "none";
    document.getElementById('closebtn_' + overlay).style.display = "block";
    document.getElementById(overlay).style.display = "block";
    document.getElementById('box').style.height = "640px";
}

function closeBox(overlay) {
    let currentMenu = home;
    document.getElementById('home').style.display = "block";
    document.getElementById('closebtn_' + overlay).style.display = "none";
    document.getElementById(overlay).style.display = "none";
    document.getElementById('box').style.height = "320px";
}

function onLoadFunction(){
    let currentMenu = home;
    age();
}

function age(){
    var dob = new Date("12/19/2001");  
    //calculate month difference from current date in time  
    var month_diff = Date.now() - dob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    var age = Math.abs(year - 1970);  
      
    //display the calculated age  
    document.getElementById('dob').innerHTML = "12/19/2001 (" + age + ")";  
}