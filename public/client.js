const signupForm = document.getElementById("signup-form");

signupForm ? signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const passwordConfirm = document.getElementById("signup-password-confirm").value;

    const response = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password, passwordConfirm }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await response.json();
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

document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
        await fetch(`/admin/delete/${btn.dataset.id}`, {
            method: "POST",
            body: JSON.stringify({ del_id: btn.dataset.id }),
            headers: {
                "Content-Type": "application/json"
            }
        })
    });
});

const roleForm = document.getElementById("role-form");

roleForm ? roleForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const role = document.getElementById("role-input").value;
    const id = document.getElementById("role-id").value;
    await fetch(`/admin/change-role/${id}`, {
        method: "POST",
        body: JSON.stringify({ role }),
        headers: {
            "Content-Type": "application/json"
        }
    });
}) : "";