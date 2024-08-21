document.addEventListener("DOMContentLoaded", function () {
  var counterElement = document.querySelector(".counter");
  var btnElement = document.querySelector(".btn");

  var countdown = 30;

  var timer = setInterval(function () {
    countdown--;
    counterElement.textContent = countdown;

    if (countdown === 0) {
      clearInterval(timer);
      btnElement.disabled = false;
      btnElement.textContent = "Get Link";
      counterElement.style.display = "none";

      // Thêm sự kiện click để chuyển hướng khi nút được kích hoạt
      btnElement.addEventListener("click", function () {
        window.location.href = "https://fullstack.edu.vn/?_type=tab";
      });
    }
  }, 1000);
});
