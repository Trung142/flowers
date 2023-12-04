//longin
const email = document.querySelector('#email');
const user = document.querySelector('#Username');
const password = document.querySelector('#password');
//error
const handleError = (input, error) => {
    let small = document.querySelector('small');
    small.innerText = error;
}
//sucess
const handleSuccess = (input) => {
    let small = document.querySelector('small');
    small.innerText = "";
}
//check email
const handleCheckEmail = (input) => {
    input.value = input.value.trim();
    if (input.value != "") {
        handleSuccess(input);
        handlepassword(password, 4, 8);
    } else {
        handleError(input, 'email không hợp lê !');
    }
}
//check user name
const handleUsernam = (input, min, max) => {
    input.value = input.value.trim();
    if (input.value == "") {
        handleError(input, 'Username không được để trống !');
        return true;
    } if (input.value != "" && (input.value.length > max || input.value.length < min)) {
        handleError(input, `username phải lớn hơn ${min} và nhỏ hơn ${max} `);
        return true;
    } else {
        handleSuccess(input);
        handleCheckEmail(email);
    }
    return false;

}
// check password
const handlepassword = (input, min, max) => {
    input.value = input.value.trim();
    if (input.value == "") {
        handleError(input, 'password không được để trống !');
        return true;
    } if (input.value != "" && (input.value.length > max || input.value.length < min)) {
        handleError(input, `password phải lớn hơn ${min} và nhỏ hơn ${max} `);
        return true;
    } else {
        handleSuccess(input);
    }
    return false;
}
let id = document.getElementById('mesagers');
id.addEventListener('click', (event) => {
    event.preventDefault();
    handleUsernam(user, 5, 10);

})