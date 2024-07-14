const data = [];

function createUser(name, password, email) {
  return {
    name: name,
    password: password,
    email: email,
    role: "user",
  };
}

function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    console.error("Thông tin không đầy đủ");
    return;
  }

  var newUser = createUser(name, password, email);
  data.push(newUser);
  return data;
}

function handleLogin(email, password) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].email === email && data[i].password === password) {
      return data[i];
    }
  }
  return "Thông tin đăng nhập không hợp lệ";
}

handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
var dataLogin = handleLogin("nguyenvanb@email.com", "1234567");

console.log("data =", data);
console.log("dataLogin =", dataLogin);
