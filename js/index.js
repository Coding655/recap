document.getElementById('btn').addEventListener('click', function(){
    const inputEmailField = document.getElementById('email-field');
    const email = inputEmailField.value;
    const inputPassField = document.getElementById('pass-field');
    const pass = inputPassField.value;
    if(email === 'imransirazee@gmail.com' && pass === 'password'){
        window.location.href = "main-page.html";
    }
    else{
        alert('Wrong Password');
    }
})