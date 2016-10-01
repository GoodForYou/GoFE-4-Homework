var startPauseButton = document.getElementById('start_pause');
var clearButton = document.getElementById('clear');
var timeResume = 0;
var timeDiff = 0;
var timerOn;

function checkTime (x) {
  if (x < 10) {
    x = '0' + x;
  }
  return x;
}

function checkMilliseconds (x) {
  if (x < 10) {
    x = '00' + x;
  } else if (x >= 10 && x < 100) {
    x = '0' + x;
  }
  return x;
}

function timerStart () {
  startPauseButton.innerHTML = 'Pause';

  timeZero = new Date().getTime();

  function currentTime () {
    timeDiff = new Date().getTime() - timeZero + timeResume;
    ms = parseInt(timeDiff % 1000);
    s = parseInt((timeDiff/1000) % 60);
    m = parseInt((timeDiff/(1000*60)) % 60);
    h = parseInt((timeDiff/(1000*60*60)) % 24);

    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    ms = checkMilliseconds(ms);

    document.getElementById('timer').innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

  timerOn = setInterval(currentTime, 1);
}

function timerPause () {
  clearInterval(timerOn);
  timeResume = timeDiff;
  startPauseButton.innerHTML = 'Start';
}

function timer () {
  if (startPauseButton.innerHTML === 'Start') {
    timerStart();
  } else {
    timerPause();
  }
}

function clear () {
    clearInterval(timerOn);
    startPauseButton.innerHTML = 'Start';
    timeResume = 0;
    document.getElementById('timer').innerHTML = "00:00:00:000";
}

startPauseButton.addEventListener('click', timer);
clearButton.addEventListener('click', clear);
