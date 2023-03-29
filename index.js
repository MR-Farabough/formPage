const form = document.getElementById('form-card')
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const password = document.getElementById('password')
const rePass = document.getElementById('password-verify')
const errorMessage = document.querySelector('.error-message')
firstName.setCustomValidity('Invalid field.');
lastName.setCustomValidity('Invalid field.');
password.setCustomValidity('Invalid field.');
rePass.setCustomValidity('Invalid field.');

alert("ATTENTION: If you are using this on github pages DO NOT HIT SUBMIT. It will take you to a 404 error")

firstName.addEventListener('input', () => {
    if (firstName.value.length < 3) {
        firstName.setCustomValidity('Invalid field.');
    } else {
        firstName.setCustomValidity('');
    }  
})

lastName.addEventListener('input', () => {
    if (lastName.value.length < 3) {
        lastName.setCustomValidity('Invalid field.');
    } else {
        lastName.setCustomValidity('');
    }  
})

password.addEventListener('input', () => {
    if (password.value.length < 5) {
        password.setCustomValidity('Invalid field.');
    } else {
        password.setCustomValidity('');
    }  
    if (password.value != rePass.value) {
        password.setCustomValidity('Invalid field.');
        errorMessage.innerText = '*Passwords must match'
    } else if (password.value.length < 5) {
        password.setCustomValidity('Invalid field.');
        rePass.setCustomValidity('Invalid field.');
    } else {
        errorMessage.innerText = ''
        rePass.setCustomValidity('')
        password.setCustomValidity('')
    }
})

rePass.addEventListener('input', () => {
    if (rePass.value.length < 5) {
        rePass.setCustomValidity('Invalid field.');
    } else {
        rePass.setCustomValidity('');
    }  
    if (password.value != rePass.value) {
        rePass.setCustomValidity('Invalid field.');
        errorMessage.innerText = '*Passwords must match'
    } else if (password.value.length < 5) {
        password.setCustomValidity('Invalid field.');
        rePass.setCustomValidity('Invalid field.');
    } else {
        errorMessage.innerText = ''
        rePass.setCustomValidity('')
        password.setCustomValidity('')
    }
})

form.addEventListener('submit' , (e) => {
    let message = []
    if (password.value === rePass.value) {
        message.push('successful')
    }
    if (firstName.value == null || firstName.value == '' || lastName.value == null || lastName.value == '') {
        message.push('Name must be more than 3 characters')
    }
    if (password.value == null || rePass.value == null) {
        message.push('Must enter a password')
    }
    if (message.length > 0 && message[0] != 'successful') {
        e.preventDefault()
        alert(message)
    }
})