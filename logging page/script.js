function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // you can add more sophisticated login logic here
    if (username && password) {
        document.getElementById("welcome-message").innerText= "Welcome, " + username + "!";
        document.getElementById("welcome-message").style.display = "block";

        document.getElementById("login-form").style.display = "none";
    }
}