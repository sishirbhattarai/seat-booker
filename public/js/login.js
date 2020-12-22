const loginFormHandler = async(event) => {
    event.preventDefault();

    const email = document.getElementById('email-login').value.trim();
    const password = document.getElementById('password-login').value.trim();


    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({email, password}), 
            headers: {'Content-Type': 'application/json'}
        })

        if (response.ok) {
            document.location.replace('/profile')
            
        } else {
            alert(response.statusText)
        }
    }
};

document
    .getElementById('login-btn')
    .addEventListener('click', loginFormHandler)