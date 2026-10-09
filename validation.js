let submitButton = document.getElementById("submitButton")
let clearButton = document.getElementById("clearButton")
let messages = document.getElementById("messages")

submitButton.addEventListener("click", function(){
    messages.innerHTML = "";

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let ageGroup = document.getElementById("ageGroup").value;

    
    let gender = document.querySelector('input[name="gender"]:checked');
    let usernameConstraint = /^[a-z0-9]{4,12}$/;
    let emailConstraint = /@.*\.(net|com|org|edu)$/;
    let phoneConstraint = /^\(\d{3}\)-\d{3}-\d{4}$/;
    let passwordConstraint = /^[A-Za-z0-9_]{9,}$/;

    if(username == ""){
        messages.innerHTML +=
            '<p>Please Enter<span class="empty"> Username</span></p>';
    }
    else if(!usernameConstraint.test(username)){
        messages.innerHTML +=
            '<p>Please Enter <span class="invalid">a valid username</span></p>';
    }

    if(email == ""){
        messages.innerHTML +=
            '<p>Please Enter<span class="empty"> Email</span></p>';
    }
    else if(!emailConstraint.test(email)){
        messages.innerHTML +=
            '<p>Please Enter <span class="invalid">a valid email</span></p>';
    }

    if(phone == ""){
        messages.innerHTML +=
            '<p>Please Enter<span class="empty"> Phone Number</span></p>';
    }
    else if(!phoneConstraint.test(phone)){
        messages.innerHTML +=
            '<p>Please Enter <span class="invalid">a valid phone number</span></p>';
    }

    if(password == ""){
        messages.innerHTML +=
            '<p>Please Enter<span class="empty"> Password</span></p>';
    }
    else if(!passwordConstraint.test(password)){
        messages.innerHTML +=
            '<p>Please Enter <span class="invalid">a valid password</span></p>';
    }

    if(gender == null){
        messages.innerHTML +=
            '<p>Please Select<span class="empty"> Gender</span></p>';
    }

    if(ageGroup == ""){
        messages.innerHTML +=
            '<p>Please Select<span class="empty"> Age Group</span></p>';
    }

    if(password != confirmPassword){
        alert("password do not match")
    }
    
});

clearButton.addEventListener("click", function(){
    messages.innerHTML = "";
});
