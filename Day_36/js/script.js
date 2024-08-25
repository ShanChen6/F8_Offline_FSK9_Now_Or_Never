import { handleResult } from "./handle.js";

document.addEventListener("DOMContentLoaded", function () {
  const actionElement = document.querySelector(".action");
  const btnElement = document.querySelector(".btn");

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.lang = "vi-VN";

  const handleSearch = () => {
    // Cập nhật thông báo khi người dùng click vào nút
    actionElement.textContent = "Hãy nói nội dung bạn cần tìm kiếm";
    actionElement.className = "action";

    recognition.start(); // Bắt đầu nhận diện giọng nói

    recognition.onstart = function () {
      actionElement.textContent = "Hãy nói nội dung bạn muốn";
    };

    recognition.onspeechend = function () {
      recognition.stop();
    };

    recognition.onresult = function (event) {
      actionElement.textContent = "Đã nói xong. Hy vọng kết quả như ý bạn";
      actionElement.className = "action success";

      const transcript = event.results[0][0].transcript;
      setTimeout(() => {
        const status = handleResult(transcript.toLowerCase());
        if (status) {
          // Nếu thực hiện thành công, sẽ chuyển hướng trang web
        } else {
          actionElement.textContent =
            "Không thực hiện được yêu cầu. Hãy thử lại.";
          actionElement.className = "action";
          btnElement.disabled = false;
        }
      }, 1000);
    };

    recognition.onerror = function () {
      actionElement.textContent = "Có lỗi xảy ra, vui lòng thử lại.";
      actionElement.className = "action";
      btnElement.disabled = false;
    };

    // Trong trường hợp bắt đầu nhận diện, nút có thể tạm thời bị vô hiệu hóa
    btnElement.disabled = true;
  };

  // Gắn sự kiện click cho nút
  btnElement.addEventListener("click", handleSearch);
});
