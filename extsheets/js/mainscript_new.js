function uriHandler(){
    uri = window.location.hash.substr(1);
    if (uri) {
        openBox(uri);
    }
}

function openBox(overlay) {
    let currentMenu = overlay;
    console.log('OPENED ' + currentMenu + ' // CLOSED home')
    document.getElementById('home').style.display = "none";
    document.getElementById('closebtn_' + overlay).style.display = "block";
    document.getElementById(overlay).style.display = "block";
    document.getElementById('box').style.height = "680px";
    //640 on phone, add later
}

function closeBox(overlay) {
    let currentMenu = 'home';
    console.log('OPENED ' + currentMenu + ' // CLOSED ' + overlay)
    document.getElementById('home').style.display = "block";
    document.getElementById('closebtn_' + overlay).style.display = "none";
    document.getElementById(overlay).style.display = "none";
    document.getElementById('box').style.height = "320px";
}

function onLoadFunc(){
    age();
    uriHandler();
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
    document.getElementById('dob').innerHTML = '19/12/01' +  '[' + age + ']';  
}