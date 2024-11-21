 // Function to handle form Submission
function handleFormSubmit(event) {
    event.preventDefault();  //Prevent the form from submitting
     const email=document.getElementById('email').value;
     const password=document.getElementById('password').value;

    // Basic validation 
    if(email && password) {
        // Save login status in sessionStorage
        sessionStorage.setItem('user', JSON.stringify({email, password }));
        //Redirect to dashboard
        window.location.href='dashboard.html';
    }
    else{
        alert('Invalid username or password');
    }
}
    
/*//Function to validate email format 
function validateEmail(email) {
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}  */

//Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField=document.getElementById('password');
    const togglePassword=document.getElementById('togglePassword');

    // Toggle the innput type password
    if(togglePassword.checked) {
        passwordField.type='text';
    }
    else {
        passwordField.type='password';
    }
}

 // Check authentication status 
 function checkAuthentication() {
    const user= JSON.parse(sessionStorage.getItem('user'));
     if(!user) {
        // If not logged in, redirect to login page 
        window.location.href='index.html';
     }
 }

 // Logout function 
 function logout() {
    // Remove login status from localStorage
    sessionStorage.removeItem('user');
    //Redirect to index page or login page
    window.location.href='index.html';
 }
 // Toggle notification
 function toggleNotification() {
    alert("No new notifications");
 }   

