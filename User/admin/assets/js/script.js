document.querySelector(".form-signin").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    if (email === "admin@gmail.com" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid email or password.");
    }
});

