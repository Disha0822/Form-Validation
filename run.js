function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailValidText = document.getElementById("emailValidText");
    const email = emailInput.value.trim();
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        // Email is valid
        emailValidText.innerText = "Email is valid";
        emailValidText.style.color = "green";
        return true;
    } else {
        // Email is invalid
        emailValidText.innerText = "Email is not valid";
        emailValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on keyup event
const emailInput = document.getElementById("email");
emailInput.addEventListener("keyup", validateEmail);


function validateUrl() {
    const urlInput = document.getElementById("url");
    const urlValidText = document.getElementById("urlValidText");
    const url = urlInput.value.trim();
    // Regular expression for URL validation
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (urlRegex.test(url)) {
        // URL is valid
        urlValidText.innerText = "URL is valid";
        urlValidText.style.color = "green";
        return true;
    } else {
        // URL is invalid
        urlValidText.innerText = "URL is not valid";
        urlValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on keyup event
const urlInput = document.getElementById("url");
urlInput.addEventListener("keyup", validateUrl);


function validateAlpha() {
    const alphaInput = document.getElementById("alpha");
    const alphaValidText = document.getElementById("alphaValidText");
    const alpha = alphaInput.value.trim();

    // Regular expression for alpha validation (only alphabetic characters)
    const alphaRegex = /^[A-Za-z ]+$/;
    if (alphaRegex.test(alpha)) {
        // Alpha text is valid
        alphaValidText.innerText = "Alpha text is valid";
        alphaValidText.style.color = "green";
        return true;
    } else {
        // Alpha text is invalid
        alphaValidText.innerText = "Alpha text is not valid";
        alphaValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on keyup event
const alphaInput = document.getElementById("alpha");
alphaInput.addEventListener("keyup", validateAlpha);


function validateTextarea() {
    const textareaInput = document.getElementById("textarea");
    const textareaValidText = document.getElementById("textareaValidText");
    const textarea = textareaInput.value.trim();
    if (textarea.length > 0) {
        // Textarea is not empty
        textareaValidText.innerText = "Textarea is valid";
        textareaValidText.style.color = "green";
        return true;
    } else {
        // Textarea is empty
        textareaValidText.innerText = "Textarea is required";
        textareaValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on keyup event
const textareaInput = document.getElementById("textarea");
textareaInput.addEventListener("keyup", validateTextarea);


function validateImage() {
    const imageInput = document.getElementById("image");
    const imageValidText = document.getElementById("imageValidText");
    if (imageInput.files.length > 0) {
        // Image file has been selected
        imageValidText.innerText = "Image is selected";
        imageValidText.style.color = "green";
        return true;
    } else {
        // No image file selected
        imageValidText.innerText = "Please select an image";
        imageValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on change event (when a file is selected)
const imageInput = document.getElementById("image");
imageInput.addEventListener("change", validateImage);


function validatePassword() {
    const passwordInput = document.getElementById("password");
    const passwordValidText = document.getElementById("passwordValidText");
    const password = passwordInput.value.trim();
    const minLength = 8; // Minimum length requirement
    if (password.length >= minLength) {
        // Password meets the minimum length requirement
        passwordValidText.innerText = "Password is valid";
        passwordValidText.style.color = "green";
        return true;
    } else {
        // Password does not meet the minimum length requirement
        passwordValidText.innerText = `Password should be at least ${minLength} characters long`;
        passwordValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on keyup event
const passwordInput = document.getElementById("password");
passwordInput.addEventListener("keyup", validatePassword);


function validatePhoneNumber() {
    const phoneNumberInput = document.getElementById("phoneNumber");
    const phoneNumberValidText = document.getElementById("phoneNumberValidText");
    const phoneNumber = phoneNumberInput.value.trim();
    // Regular expression for a 10-digit phone number (change as needed)
    const phoneRegex = /^[0-9]{10}$/;
    if (phoneRegex.test(phoneNumber)) {
        // Phone number matches the desired format
        phoneNumberValidText.innerText = "Phone number is valid";
        phoneNumberValidText.style.color = "green";
        return true;
    } else {
        // Phone number does not match the desired format
        phoneNumberValidText.innerText = "Please enter a valid 10-digit phone number";
        phoneNumberValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on keyup event
const phoneNumberInput = document.getElementById("phoneNumber");
phoneNumberInput.addEventListener("keyup", validatePhoneNumber);


function validateBirthdate() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdateValidText = document.getElementById("birthdateValidText");
    const birthdate = new Date(birthdateInput.value); // Convert input value to a Date object
    // Check if the birthdate is a valid date and is in the past
    if (!isNaN(birthdate.getTime()) && birthdate < new Date()) {
        // Birthdate is valid and in the past
        birthdateValidText.innerText = "Birthdate is valid";
        birthdateValidText.style.color = "green";
        return true;
    } else {
        // Birthdate is invalid or in the future
        birthdateValidText.innerText = "Please enter a valid birthdate";
        birthdateValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function on change event
const birthdateInput = document.getElementById("birthdate");
birthdateInput.addEventListener("change", validateBirthdate);


function validateCheckbox() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkboxValidText = document.getElementById("checkboxValidText");

    if (checkboxes.length > 0) {
        // At least one checkbox is checked
        checkboxValidText.innerText = "At least one checkbox is checked";
        checkboxValidText.style.color = "green";
        return true;
    } else {
        // No checkbox is checked
        checkboxValidText.innerText = "Please check at least one checkbox";
        checkboxValidText.style.color = "red";
        return false;
    }
}
// Example of calling the function when checkboxes change state
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
checkboxInputs.forEach(input => {
    input.addEventListener("change", validateCheckbox);
});

function validateCurrency() {
    const currencyInput = document.getElementById("currency");
    const currencyValidText = document.getElementById("currencyValidText");
    const currency = currencyInput.value.trim();

    // Regular expression for currency validation (positive decimal number)
    const currencyRegex = /^\d+(\.\d{1,2})?$/;

    if (currencyRegex.test(currency)) {
        // Currency format is valid
        currencyValidText.innerText = "Currency format is valid";
        currencyValidText.style.color = "green";
        return true;
    } else {
        // Currency format is invalid
        currencyValidText.innerText = "Please enter a valid currency amount";
        currencyValidText.style.color = "red";
        return false;
    }
}

// Example of calling the function on keyup event
const currencyInput = document.getElementById("currency");
currencyInput.addEventListener("keyup", validateCurrency);


function validateForm() {
    let isValid = true;

    // Reset previous validation messages
    resetValidationMessages();

    // Perform individual field validations
    isValid = isValid && validateEmail();
    isValid = isValid && validateAlpha();
    isValid = isValid && validateUrl();
    isValid = isValid && validateTextarea();
    isValid = isValid && validateImage();
    isValid = isValid && validatePassword();
    isValid = isValid && validatePhoneNumber();
    isValid = isValid && validateBirthdate();
    isValid = isValid && validateCurrency();
    isValid = isValid && validateCheckbox();

    if (!isValid) {
        // Form has invalid fields, prevent submission
        return false;
    }

    // Form is valid, allow submission
    return true;
}

function resetValidationMessages() {
    // Reset previous validation messages
    const validationMessages = document.querySelectorAll('.validation-message');
    validationMessages.forEach(message => message.innerText = '');
}

function displayValidationMessage(field) {
    // Display validation message for the given field
    const messageElement = document.getElementById(`${field}ValidText`);
    messageElement.innerText = `Please provide a valid ${field}.`;
    messageElement.style.color = "red";
}

// Example validation functions (replace with your actual validation logic)
function validateEmail() {
    const emailInput = document.getElementById("email");
    if (emailInput.value.trim() === "") {
        displayValidationMessage("email");
        return false;
    }
    return true;
}

function validateAlpha() {
    const alphaInput = document.getElementById("alpha");
    if (alphaInput.value.trim() === "") {
        displayValidationMessage("alpha");
        return false;
    }
    return true;
}

// Add validation functions for other fields as needed

function submit() {
    if (validateForm()) {
        window.alert("Form submitted successfully!");
    } else {
        window.alert("Please fill in all required fields correctly.");
    }
}

