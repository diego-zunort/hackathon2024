document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login");
    const createAccountForm = document.getElementById("createAccount");
    const forgotPasswordForm = document.getElementById("forgotpassword");

    document.getElementById("linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();  // Prevents the default action of the link (which is redirecting)
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.getElementById("linkForgotPassword").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        forgotPasswordForm.classList.remove("form--hidden");
    });

    document.getElementById("linkLogin").addEventListener("click", e => {
        e.preventDefault();
        createAccountForm.classList.add("form--hidden");
        forgotPasswordForm.classList.add("form--hidden");
        loginForm.classList.remove("form--hidden");
    });
});

