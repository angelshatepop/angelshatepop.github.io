const secret = window.sessionStorage.getItem('secret')
const homelink = document.getElementById("homelink")
const loginlink = document.getElementById("loginlink")
const body = document.getElementById("body")

function setThemeTime(){
    let date = new Date();
    let hour = date.getHours();
    if(hour < 17 && hour >= 5){
      body.style.backgroundColor= "ghostwhite";
      document.body.style.color="black";
      loginlink.style.color = "black";
      homelink.style.color = "black";
    }
    if (secret == 1){
      body.className = "gradientbg";
      homelink.style.color = "black";
      loginlink.style.color = "black";
      window.sessionStorage.setItem('secret', 0);
    }
  }