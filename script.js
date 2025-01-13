document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("studentForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!validateForm()) {
            alert("Please correct the errors in the form before submitting.");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });
});

// Validation function
function validateForm() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const matriculation = document.getElementById("matriculation");
    const email = document.getElementById("email");
    const country = document.getElementById("country");
    const program = document.getElementById("program");
    const started = document.getElementById("started");

    if (firstName.value.trim() === "" || lastName.value.trim() === "") {
        alert("Name fields cannot be empty.");
        return false;
    }

    if (!/^\d+$/.test(matriculation.value)) {
        alert("Matriculation must be numeric.");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert("Invalid email address.");
        return false;
    }

    if (!country.value || !program.value || !started.value) {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}
