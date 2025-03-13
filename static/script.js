// Function to validate the form
function validateForm(event) {
    if (!firstname()) {
        event.preventDefault();  
        return false;
    }
    if (!lastname()) {
        event.preventDefault();
        return false;
    }
    if (!DOB()) {
        event.preventDefault();
        return false;
    }
    if (!gender()) {
        event.preventDefault();
        return false;
    }
    if (!username()) {
        event.preventDefault();
        return false;
    }
    if (!password()) {
        event.preventDefault();
        return false;
    }
    return true;
}

function firstname() {
    const firstName = document.getElementById("FirstName").value;

    const namePattern = /^[A-Za-z]+$/;

    if (!namePattern.test(firstName)) {
        alert("First name should only contain letters.");
        return false;
    }
    return true;
}

function lastname(){
    const lastName = document.getElementById("LastName").value;

    const namePattern = /^[A-Za-z]+$/;

    if (!namePattern.test(lastName)) {
        alert("last name should only contain letters.");
        return false;
    }
    return true;
}

function DOB(){
    const DOB = document.getElementById("DOB").value;

    if("")
}