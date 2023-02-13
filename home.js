function setThemeTime(){
    var date = new Date();
    var hour = date.getHours();
    if(hour < 17 && hour >= 5){
      document.body.style.backgroundColor= "ghostwhite";
      document.body.style.color="black";
    }
  }