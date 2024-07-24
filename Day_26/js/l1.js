// app.js

document.getElementById("loginLink").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "flex";
  showLoginForm();
});

function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
}

function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

// Hàm đăng ký
function register() {
  const regUsername = document.getElementById("regUsername").value;
  const regPassword = document.getElementById("regPassword").value;

  if (regUsername && regPassword) {
    // Lưu thông tin đăng ký vào Local Storage
    localStorage.setItem("username", regUsername);
    localStorage.setItem("password", regPassword);

    document.getElementById("message").innerText = "Đăng ký thành công!";
  } else {
    document.getElementById("message").innerText =
      "Vui lòng nhập đầy đủ thông tin!";
  }
}

// Hàm đăng nhập
function login() {
  const loginUsername = document.getElementById("loginUsername").value;
  const loginPassword = document.getElementById("loginPassword").value;

  // Lấy thông tin đăng ký từ Local Storage
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (loginUsername === storedUsername && loginPassword === storedPassword) {
    document.getElementById("message").innerText = "Đăng nhập thành công!";
  } else {
    document.getElementById("message").innerText =
      "Sai tên đăng nhập hoặc mật khẩu!";
  }
}

// Đóng overlay khi nhấp ra ngoài form
document.getElementById("overlay").addEventListener("click", function (e) {
  if (e.target === document.getElementById("overlay")) {
    document.getElementById("overlay").style.display = "none";
  }
});
