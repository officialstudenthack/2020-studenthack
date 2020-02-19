// Configuration
var startCountDownDate = new Date("Feb 06, 2020 9:00:00").getTime()
var countDownDate = new Date("Apr 25, 2020 9:00:00").getTime();

// Logic
var currentTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

var previousTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}

$(document).queue(updateTime);

function updateTime() {
  $(this).dequeue();
  var now = new Date().getTime();
  var distance = countDownDate - now;

  currentTime.days = Math.floor(distance / (1000 * 60 * 60 * 24));
  currentTime.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  currentTime.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  currentTime.seconds = Math.floor((distance % (1000 * 60)) / 1000);

  for (var unit in previousTime) {
    if (previousTime[unit] == 0 || previousTime[unit] != currentTime[unit]) {
      previousTime[unit] = currentTime[unit];
    }
    $("#timer-" + unit).html(currentTime[unit] < 10 ? "0" + currentTime[unit] : currentTime[unit]);
  }
  const progressBarDist = ((now - startCountDownDate) / (countDownDate - startCountDownDate)) * 100;
  $("#timer-progressbar").css("width", `${progressBarDist}%`);

  if (distance < 0) {
    for (var unit in currentTime) {
      $("#timer-" + unit).html("00");
      $("#timer-progressbar").css("width", "100%");
    }
    return;
  }
  $(document).delay(1000).queue(updateTime);
}