const checkEmail = (email) => {
    let p = document.querySelector("#pEmail");
    if (email !== "murtazamazhar7798@gmail.com") {
        p.style.color = "red";
        p.innerText = "Email ID does not Exist";
        return false; // Return false if email is invalid
    } else {
        p.innerText = ""; // Clear error message if valid
        return true; // Return true if email is valid
    }
}

const checkPassword = (password) => {
    let p = document.querySelector("#pPassword");
    if (password !== "Murtaza123") {
        p.style.color = "red";
        p.innerText = "Incorrect Password";
        return false; // Return false if password is incorrect
    } else {
        p.innerText = ""; // Clear error message if valid
        return true; // Return true if password is valid
    }
}

const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission for custom validation

    let email = document.querySelector("#email").value;
    let isEmailValid = checkEmail(email); // Check email first

    if (isEmailValid) { // Only check password if email is valid
        let password = document.querySelector("#password").value;
        checkPassword(password); // Check password
    }

    // Check if both errors are empty before allowing successful login
    if (isEmailValid && !document.querySelector("#pPassword").innerText) {
        alert("Login Successful");
        // You can proceed with the form submission or redirect here
    }
});
