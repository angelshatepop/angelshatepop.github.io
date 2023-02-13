function setThemeTime(){
    var date = new Date();
    var hour = date.getHours();
    if(hour < 17 && hour >= 5){
      document.body.style.backgroundColor= "ghostwhite";
      document.body.style.color="black";
      document.getElementById("loginlink").style.color = "black";
      document.getElementById("home").style.color = "black";
    }
    if (secret == 1){
      document.getElementById("body").className = "gradientbg";
      document.getElementById("home").style.color = "black";
      document.getElementById("loginlink").style.color = "black";
      window.sessionStorage.setItem('secret', 0);
    }
  }

var secret = window.sessionStorage.getItem('secret');