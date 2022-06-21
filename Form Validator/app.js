const form = document.querySelector('.main form');
const userName = document.querySelector('#Username');
const email = document.querySelector('#Email');
const password = document.querySelector('#Password');
const confirm_pw = document.querySelector('#Confirm-password');

function showError(input , message) {
    let small = input.parentElement.querySelector('small');
    input.classList.add('error');
    small.innerText = message;
}
function showSuccess(input) {
    let small = input.parentElement.querySelector('small');
    input.classList.remove('error');
    small.innerText = '';
}
function checkUsername(input) {
    if (!input.value.trim()) {
        showError(input , 'Username is required')
    }
    else {
        showSuccess(input);
    }
}
function checkEmail(input) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.value.trim()) {
        showError(input , 'Email is required');
    }
    else if (!regex.test(input.value.trim())) {
        showError(input , 'Email khong hop le!');
    }
    else {
        showSuccess(input);
    }
}
function checkPasswordLength(input , min) {
    if (!input.value.trim()) {
        showError(input , 'Password is required');
    }
    else if (input.value.trim().length < min) {
        showError(input , `Password it nhat ${min} ki tu!`);
    }
    else {
        showSuccess(input);
    }
}
function checkconfirmPw(pass , confirmPass) {
    if (!confirmPass.value.trim()) {
        showError(confirmPass , 'Confirm-password is required');
    }
    else if (pass.value.trim() !== confirmPass.value.trim()) {
        showError(confirmPass , 'Confirm-password khong trung khop!');
    }
    else {
        showSuccess(confirmPass);
    }
}
form.addEventListener('submit' , function(e) {
    e.preventDefault();
    checkUsername(userName);
    checkEmail(email);
    checkPasswordLength(password , 8);
    checkconfirmPw(password , confirm_pw);
})