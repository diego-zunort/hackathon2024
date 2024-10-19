// setting errors on the form for log in
function setFormMessage(formElement, type, message){
    const messageElement = formElement.querrySelector(".fom__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add("form__message--${type}");
}

// setting messages on individual input fields themselves

function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.preventElement.querrySelector(".form__input--error-message").textContent = message;

}

// Once the document is ready to be worked with we can run this function
// This references both the login and create account form 
document.addEventListener("DOMContetLoaded",() => {
    const loginForm = doument.querrySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

// when clicking on the create account the log in form will hide and the create account form will become visible
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
// when clicking on the log in form the create account will go away and the log in form will pop up
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");  
    });

// Upon submitting log in form grab event object 
    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").for
});


