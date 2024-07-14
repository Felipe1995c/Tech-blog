const loginForm = async (event) => {
    event.preventDefault();

    // Collect the values frim the login form
    const user_name = document.querySelector('#login-userName').value.trim();
    const password = document.querySelector('#login-password').value.trim();

    if (user_name && password) {
        // send a Post request to API
        const res =await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringyfy({ user_name, password }),
                headers: { 'Content-Type': 'application/json'},
        });

        if (res.ok) {
            // Then redirect the browser to the homepage
            document.location.replace('/');
        } else {
            alert(res.statusText);
        }
    }
};

document.querySelector('.login-form').addEventListener('submit', loginForm);