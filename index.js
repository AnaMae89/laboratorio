function validarName() {
    var nameField = document.getElementById('name');
    var validName = /^[A-Za-z\s]+$/;
    var errorName = document.getElementById('errorName');

    if (nameField.value == 0) {
        errorName.innerHTML = "Rellene este campo";
        nameField.classList.add("novalido");
        nameField.classList.add("errorIcon");
        return false;
    } else if (validName.test(nameField.value)) {
        nameField.classList.remove("novalido");
        nameField.classList.remove("errorIcon");
        errorName.innerHTML = "";
        nameField.classList.add("valido");
        nameField.classList.add("successIcon");
        return true;
    } else {
        errorName.innerHTML = "Nombre no válido";
        nameField.classList.add("novalido");
        nameField.classList.add("errorIcon");
        return false;
    }
}

function validarEmail() {
    var emailField = document.getElementById('email');
    var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    var errorEmail = document.getElementById('errorEmail');

    if (emailField.value == 0) {
        errorEmail.innerHTML = "Rellene este campo";
        emailField.classList.add("novalido");
        emailField.classList.add("errorIcon");
        return false;
    } else if (validEmail.test(emailField.value)) {
        emailField.classList.remove("novalido");
        emailField.classList.remove("errorIcon");
        errorEmail.innerHTML = "";
        emailField.classList.add("valido");
        emailField.classList.add("successIcon");
        return true;
    } else {
        errorEmail.innerHTML = "Email no válido";
        emailField.classList.add("novalido");
        emailField.classList.add("errorIcon");
        return false;
    }
}

function validarPassword() {
    var passwordField = document.getElementById('password');
    var validPassword = /^[\s\S]{1,8}$/;
    var errorPassword = document.getElementById('errorPassword');

    if (passwordField.value == 0) {
        errorPassword.innerHTML = "Rellene este campo";
        passwordField.classList.add("novalido");
        passwordField.classList.add("errorIcon");
        return false;
    } else if (validPassword.test(passwordField.value)) {
        passwordField.classList.remove("novalido");
        passwordField.classList.remove("errorIcon");
        errorPassword.innerHTML = "";
        passwordField.classList.add("valido");
        passwordField.classList.add("successIcon");
        return true;
    } else {
        errorPassword.innerHTML = "No debe tener más de 8 caracteres";
        passwordField.classList.add("novalido");
        return false;
    }
}

function validarConfirmacion() {
    var passwordField = document.getElementById('password');
    var confirmField = document.getElementById('confirmacion');
    var errorConfirm = document.getElementById('errorConfirmacion');

    if (confirmField.value == 0) {
        errorConfirm.innerHTML = "Rellene este campo";
        confirmField.classList.add("invalid");
        confirmField.classList.add("errorIcon");
        return false;
    } else if (passwordField.value == confirmField.value) {
        confirmField.classList.remove("invalid");
        confirmField.classList.remove("errorIcon");
        errorConfirm.innerHTML = "";
        confirmField.classList.add("valid");
        confirmField.classList.add("successIcon");
        return true;
    } else {
        errorConfirm.innerHTML = "Las contraseñas no coinciden";
        confirmField.classList.add("invalid");
        confirmField.classList.add("errorIcon");
        return false;
    }
}

function borderButton() {
    var borderButton = document.getElementById('button');
    borderButton.onmouseover = () => {
        borderButton.classList.add('borderColor');
    }
    borderButton.onmouseout = () => {
        borderButton.classList.remove('borderColor');
    }
}
borderButton()

function validarForm() {

    if (validarName() && validarEmail() && validarPassword() && validarConfirmacion()) {
        alert("¡Enhorabuena! La inscripción ha sido correcta");
        return true;
    } else {
        return false;
    }
}