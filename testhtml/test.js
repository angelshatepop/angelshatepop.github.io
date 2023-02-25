var input = document.getElementById("key");
  input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    var key = document.getElementById('key').value;
    var key2 = 'key';
    if (key == key2){
      window.location='https://www.youtube.com/watch?v=mhYQ85Twa0U';
    }
    // Cancel the default action, if needed
    event.preventDefault();
  }
});