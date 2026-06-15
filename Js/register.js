let users = JSON.parse(localStorage.getItem('users')) || [];

function registerUser() {
  let username = document.getElementById('username').value.trim();
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('confirmPassword').value;

  if (!username || !password || !confirmPassword) {
    alert('Todos los campos son obligatorios');
    return;
  }

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  if (users.some(u => u.username === username)) {
    alert('El usuario ya existe');
    return;
  }

  if (username === "ADMIN") {
    alert('El nombre de usuario no puede ser "ADMIN"');
    return;
  }

  users.push({username, password});
  localStorage.setItem('users', JSON.stringify(users));
  alert('Usuario registrado correctamente');
  window.location.href = 'login.html';
}


