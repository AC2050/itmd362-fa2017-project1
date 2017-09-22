var email = document.getElementById('mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {

  if (email.validity.valid) {

    error.innerHTML = "";
    error.className = "error";
  }
}, false);
form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    error.innerHTML = "invalid email";
    error.className = "error active";
    event.preventDefault();
  } else {
	alert("thanks");
  }
}, false);