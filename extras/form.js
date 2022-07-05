const password = document.getElementById("password");
const password2 = document.getElementById("cnf_pass");
const check = document.getElementById("edu");

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkTerms(){
    if (check.value == false){
        showError(check, "Accept here" )
    }
    else {
        showSuccess(check);
    }
}

function checkPassword(){
    if (password.value === ""){
        showError (password, "Password is required");
    } else {
        showSuccess(password);
    }
    }

function checkConfirmPassword(){
    if(password2.value === "") {
        showError(password2, "Please confirm the password");
    } else {
        showSuccess(password2);
    }
}

function checkPasswordsMatch(){
    if (password.value !== password2.value){
        showError(password2, "Password do not match");
    }
}

const form = document.getElementById("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    checkPassword();
    checkConfirmPassword();
    checkPasswordsMatch();
})