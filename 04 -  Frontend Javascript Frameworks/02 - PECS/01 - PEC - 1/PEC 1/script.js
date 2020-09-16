const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Show Error outline

function showError(input, message) {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')
    formControl.className = 'form-control error'
    small.innerText = message;

}

// Show Success outline

function showSuccess(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}

// Check Email

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidPassword(password) {

}


// Event Listeners

form.addEventListener('submit', function(event) {
    event.preventDefault()


    if (username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username)
    }

    if (email.value === '') {
        showError(email, 'Email is required')
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid')
    } else {
        showSuccess(email)
    }

    if (password.value === '') {
        showError(password, 'Password is required')
    } else if (!isValidPassword(password.value)) {
        showError(password, 'Password is not valid')
    } else {
        showSuccess(password)
    }

    if (password2.value === '') {
        showError(password2, 'Confirm password is required')
    } else {
        showSuccess(password2)
    }
})