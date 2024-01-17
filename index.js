let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;
let displayTime = document.querySelector(".displayTime");

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    minutes++;
    seconds = 0;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = `${h}:${m}:${s}`;
}

function watchstart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

function watchstop() {
  clearInterval(timer);
}

function watchreset() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  displayTime.innerHTML = "00:00:00";
}
