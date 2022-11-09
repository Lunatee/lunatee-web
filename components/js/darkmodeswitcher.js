function switchDark() {
  var intro = document.getElementsByClassName("intro");
  var content = document.getElementsByClassName("content");
  intro.classList.toggle("dark-mode-intro");
  content.classList.toggle("dark-mode-content");
} 
