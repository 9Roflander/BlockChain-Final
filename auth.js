document.addEventListener('DOMContentLoaded', function() {

    // Registration Logic
    var registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var email = document.getElementById('registerEmail').value;
            var password = document.getElementById('registerPassword').value;
            var confirmPassword = document.getElementById('registerConfirmPassword').value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            var users = JSON.parse(localStorage.getItem('users') || '[]');
            var userExists = users.some(function(user) {
                return user.email === email;
            });

            if (userExists) {
                alert("User already exists!");
                return;
            }

            users.push({ email: email, password: password });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Registration successful!");
            window.location.href = 'ecommerce.html'; // Redirect to e-commerce page
        });
    }

    // Login Logic
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            var email = document.getElementById('loginEmail').value;
            var password = document.getElementById('loginPassword').value;

            var users = JSON.parse(localStorage.getItem('users') || '[]');
            var authenticatedUser = users.find(function(user) {
                return user.email === email && user.password === password;
            });

            if (authenticatedUser) {
                alert("Login successful!");
                window.location.href = 'ecommerce.html'; // Redirect to e-commerce page
            } else {
                alert("Invalid credentials!");
            }
        });
    }

});
