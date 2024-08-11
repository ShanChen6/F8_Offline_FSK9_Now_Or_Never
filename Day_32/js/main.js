var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress-bar .progress");
var item = document.querySelector(".progress-bar .progress span");

var offsetX = 0;
var progressBarWidth = progressBar.clientWidth;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    var rate = (offsetX / progressBarWidth) * 100;
    progress.style.width = `${rate}%`;
    clientXSpan = e.clientX;
    offsetLeft = offsetX;
    document.addEventListener("mousemove", handleDrag);
  }
});
item.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    document.addEventListener("mousemove", handleDrag);
    clientXSpan = e.clientX;
    offsetLeft = e.target.offsetLeft;
  }
});
document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});

var clientXSpan = 0;
var offsetLeft = 0;

function handleDrag(e) {
  var spaceMove = e.clientX - clientXSpan + offsetLeft;
  var rate = (spaceMove / progressBarWidth) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  progress.style.width = `${rate}%`;
  audio.currentTime = (rate / 100) * audio.duration;
}

/* 
    Xây dựng player
*/

var audio = document.querySelector("audio");
var playAction = document.querySelector(".player .play-action i");
var currentTimeEL = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

var getTimeFormat = function (seconds) {
  var mins = Math.floor(seconds / 60);
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

// Reset khi hết nhạc
audio.addEventListener("ended", function () {
  progress.style.width = "0%";
  currentTimeEL.innerText = getTimeFormat(0);
  playAction.classList.replace("fa-pause", "fa-play");
});

audio.addEventListener("canplay", function () {
  durationEl.innerText = getTimeFormat(audio.duration);
});

playAction.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

audio.addEventListener("play", function () {
  console.log("phat nhac");
  playAction.classList.replace("fa-play", "fa-pause");
});
audio.addEventListener("pause", function () {
  console.log("dung nhac");
  playAction.classList.replace("fa-pause", "fa-play");
});
audio.addEventListener("timeupdate", function () {
  currentTimeEL.innerText = getTimeFormat(audio.currentTime);
  var rate = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${rate}%`;
});

progressBar.addEventListener("mousemove", function (e) {
  var offsetX = e.offsetX;
  var rate = (offsetX / progressBarWidth) * 100;
  var previewTime = (rate / 100) * audio.duration;
  progressBar.setAttribute("data-time", getTimeFormat(previewTime));
});
