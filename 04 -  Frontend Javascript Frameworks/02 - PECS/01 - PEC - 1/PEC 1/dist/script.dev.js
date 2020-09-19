"use strict";

var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2'); // Show Error outline

function showError(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
} // Show Success outline


function showSuccess(input) {
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
} // Check Email


function checkEmail(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
} // Check required fields


function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, "".concat(getFieldName(input), " is required"));
    } else {
      showSuccess(input);
    }
  });
} // Check input length


function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, "".concat(getFieldName(input), " must be at least ").concat(min, " characters"));
  } else if (input.value.length > max) {
    showError(input, "".concat(getFieldName(input), " must be less than ").concat(max, " characters"));
  } else {
    showSuccess(input);
  }
} // Check passwords match


function checkValidPasswordsMatch(input1, input2) {
  var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

  if (!re.test(input1.value.trim())) {
    showError(input1, 'Must be lower, upper case and special char');
  } else if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
} // Get Field Name


function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
} // Event Listeners


form.addEventListener('submit', function (event) {
  event.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkValidPasswordsMatch(password, password2);
});