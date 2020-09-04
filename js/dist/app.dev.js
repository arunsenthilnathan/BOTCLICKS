"use strict";

var formlogin = document.querySelector(".btn");
var c;
if (formlogin) formlogin.addEventListener("click", function () {
  if (username.value == "admin") {
    alert("hello");
  } else {
    alert("oh no");
  }
});

function login() {
  var username = document.querySelector("#username");
  var password = document.querySelector("#password");
  var forms = document.querySelector(".loginform");

  if (username.value == "admin") {
    c = username.value;
    console.log(forms.action = "project.html");
    localStorage.setItem("uname", username.value);
  } else {
    alert("oh no");
  }
}

window.addEventListener("load", function () {
  var uname = localStorage.uname;
  document.getElementById("d").innerHTML = "welcome " + uname;
});