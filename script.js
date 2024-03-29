//your JS code here. If required.
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    
    // Create the alert message
    var alertMessage = "First Name: " + firstName + "\n" +
                       "Last Name: " + lastName + "\n" +
                       "Phone Number: " + phoneNumber + "\n" +
                       "Email ID: " + email;
    
    // Display the alert
    alert(alertMessage);
}