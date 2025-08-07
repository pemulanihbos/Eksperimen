
function loginAdmin(event) {
  event.preventDefault();
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    alert("Login berhasil");
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Login gagal");
  }
}
