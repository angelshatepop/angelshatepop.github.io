const input = document.getElementById("inputkey")
const keyresult = document.getElementById("keyresult")
const welcomeText = document.getElementById("welcome")
const body = document.getElementById("body")
const loginKey = "key"
const secretKeyGradient = "angelplus"

input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
  let inputvalue = input.value;
  if (inputvalue == loginKey) {
    window.location="./home.html";
    keyresult.innerHTML = "";
    input.value = "";
  }
  else if(inputvalue == secretKeyGradient){
    if (body.className == "gradientbg") {
      keyresult.innerHTML = "";
      input.value = "";
    }
    else {
      body.className = "gradientbg";
      welcomeText.style.color = "black";
      input.style.color = "black";
      input.style.borderColor = "black";
      input.style.backgroundColor = "#B0E0E6";
      keyresult.innerHTML = "secret: 'soup' toggled";
      keyresult.style.color = "ghostwhite";
      window.sessionStorage.setItem('secret', 1);
    }
  }
  else {
    keyresult.innerHTML = "incorrect keyphrase";
    input.value = "";
    keyresult.style.color = "#cf1020";
  }
  event.preventDefault();
}
});

input.addEventListener("input", () => {
  if(input.value.length === 0)
  {
    keyresult.innerHTML = "";
  }
})

function setThemeTime() {
  let date = new Date();
  let hour = date.getHours();
  if(hour < 18 && hour >= 5) {
    body.style.backgroundColor= "ghostwhite";
    body.style.color="black";
    input.style.color = "black";
    input.style.borderColor = "black";
  }
}