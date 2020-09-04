const formlogin = document.querySelector(".btn");
let c;
if (formlogin)
    formlogin.addEventListener("click", () => {
        if (username.value == "admin") {
            alert("hello")
        } else {
            alert("oh no")
        }
    })

function login() {
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");
    const forms = document.querySelector(".loginform")
    if (username.value == "admin") {
        c = username.value;
        console.log(forms.action = "project.html")
        localStorage.setItem("uname", username.value)
    } else {
        alert("oh no")
    }
}


window.addEventListener("load", () => {
    const uname = localStorage.uname
    document.getElementById("d").innerHTML = "welcome " + uname;

})