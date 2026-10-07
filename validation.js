submitButton.addEventListener("click", function(){
    messages.innerHTML = "";

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let ageGroup = document.getElementById("ageGroup").value;

    
    let gender = document.querySelector('input[name="gender"]:checked');

    // 4-12 chars
    let usernameConstraint = /^[a-z0-9]{4,12}$/;
    // has to be in the form of (111)-111-1111
    let emailConstraint = /@.*\.(net|com|org|edu)$/;
    
    let phoneConstraint = /^\(\d{3}\)-\d{3}-\d{4}$/;

    
})