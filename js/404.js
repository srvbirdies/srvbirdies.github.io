var timer = 6;
function myTimer () {
  if (timer > 0) {
    timer -= 1;
    document.querySelector("p").innerHTML = "Redirecting you in: " + timer + " seconds";
  } else {
    window.location.href = "https://sites.google.com/view/srvhsbirdies/home";
  }
}
setInterval(myTimer, 1000);
