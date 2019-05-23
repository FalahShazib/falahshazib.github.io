function EnableTalks() {
  DisableAll();
  document.getElementById("talks").style.display = "block";
}

function EnableWorkExp() {
  DisableAll();
  document.getElementById("w-exp").style.display = "block";
}

function EnableNonProfit() {
  DisableAll();
  document.getElementById("np").style.display = "block";
}

function EnableProject() {
  DisableAll();
  document.getElementById("projects").style.display = "block";
}

function DisableAll()
{
  document.getElementById("talks").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("np").style.display = "none";
  document.getElementById("w-exp").style.display = "none";
  document.getElementById("default-sec").style.display = "none";
}
