var input = document.getElementById("key");
var keyresult = document.getElementById("keyresult");

input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  var key = document.getElementById('key').value;
  var key2 = 'key';
  if (key == key2){
    window.location="./home.html";
    keyresult.innerHTML = "";
    input.value = "";
  }
  else{
    keyresult.innerHTML = "incorrect keyphrase";
    keyresult.style.color = "#cf1020";
  }
  event.preventDefault();
}
});

function setThemeTime(){
  var date = new Date();
  var hour = date.getHours();
  if(hour < 17 && hour >= 5){
    document.body.style.backgroundColor= "ghostwhite";
    document.body.style.color="black";
    input.style.color = "black";
  }
}

input.addEventListener("input", () => {
  if(input.value.length === 0)
  {
    keyresult.innerHTML = "";
  }
})