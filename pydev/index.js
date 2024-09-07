document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar los valores (ejemplo de verificación básica)
    if (username === 'admin' && password === '1234') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
        // Aquí puedes redirigir a otra página o hacer lo que necesites
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
        document.getElementById('message').style.color = 'red';
    }
});
