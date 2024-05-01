const signupForm = document.getElementById("signup-form");

signupForm ? signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const passwordConfirm = document.getElementById("signup-password-confirm").value;

    const response = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify({ email, password, passwordConfirm }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
    console.log(data);
    if (data.user) {
        location.assign("/")
    }
}) : "";

const loginForm = document.getElementById("login-form");

loginForm ? loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();

    if (data.user) {
        location.assign("/")
    }
}) : "";