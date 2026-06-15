let users = JSON.parse(localStorage.getItem('users')) || [];

function loginUser(e) {
  e.preventDefault(); 

  let username = document.getElementById('usuario').value.trim();
  let password = document.getElementById('contrasena').value;

  if (!username || !password) {
    alert('Usuario y contraseña requeridos');
    return;
  }

  let foundUser = users.find(u => u.username === username && u.password === password);

  if (foundUser) {
    localStorage.setItem('userSession', JSON.stringify({ type: 'users', username }));
    window.location.href = '../Html/index.html';
  } else {
    alert('Credenciales inválidas');
  }
}

document.querySelector('form').addEventListener('submit', loginUser);