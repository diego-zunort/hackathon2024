document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login");
    const createAccountForm = document.getElementById("createAccount");
    const forgotPasswordForm = document.getElementById("forgotpassword");

    const loginError = document.getElementById("loginError");
    const signupError = document.getElementById("signupError");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Switch between forms
    document.getElementById("linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.getElementById("linkForgotPassword").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        forgotPasswordForm.classList.remove("form--hidden");
    });

    document.getElementById("linkLoginFromForgot").addEventListener("click", e => {
        e.preventDefault();
        forgotPasswordForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    document.getElementById("linkLoginFromSignup").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    // Handle account creation
    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();
        const username = document.getElementById("signupUsername").value;
        const email = document.getElementById("signupEmail").value;
        const password = document.getElementById("signupPassword").value;
        const confirmPassword = document.getElementById("signupConfirmPassword").value;

        if (password !== confirmPassword) {
            signupError.textContent = "Passwords do not match!";
            return;
        }

        if (users.find(user => user.email === email)) {
            signupError.textContent = "Email already exists!";
            return;
        }

        users.push({ username, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        signupError.textContent = "";
        createAccountForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });

    // Handle login
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        const usernameOrEmail = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        const user = users.find(user => 
            (user.username === usernameOrEmail || user.email === usernameOrEmail) && user.password === password
        );

        if (!user) {
            loginError.textContent = "Username or password is incorrect!";
        } else {
            loginError.textContent = "";
            alert("Login successful!");
            // Redirect to another page or functionality after login
        }
    });
});
