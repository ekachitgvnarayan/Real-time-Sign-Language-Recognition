// Load particles.js
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js config loaded!');
});

// Redirect functions
function redirectToRegister() {
  window.location.href = "register.html";
}

function redirectToLogin() {
  window.location.href = "index.html";
}

// Validation functions
function isValidUsername(username) {
  return /^[A-Za-z][A-Za-z0-9_]{4,31}$/.test(username); // Starts with a letter, length 5-32, allows letters, numbers, and underscores
}

function isValidPassword(password) {
  return /^[A-Za-z].{4,}$/.test(password); // Starts with a letter, minimum length of 5
}

// Handle Registration
function handleRegister() {
  const newUsername = document.getElementById('newUsername').value.trim();
  const newPassword = document.getElementById('newPassword').value.trim();

  if (!newUsername || !newPassword) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Please fill in all fields!',
    });
    return;
  }

  if (!isValidUsername(newUsername)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Username!',
      text: 'Username must start with a letter, be between 5-32 characters, and contain only letters, numbers, or underscores.',
    });
    return;
  }

  if (!isValidPassword(newPassword)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Password!',
      text: 'Password must start with a letter and be at least 5 characters long.',
    });
    return;
  }

  // Store credentials in localStorage
  let users_new = JSON.parse(localStorage.getItem('users_new')) || {};
  
  if (users_new[newUsername]) {
    Swal.fire({
      icon: 'error',
      title: 'User already exists!',
      text: 'Try a different username.',
    });
  } else {
    users_new[newUsername] = newPassword;
    localStorage.setItem('users_new', JSON.stringify(users_new));
    
    Swal.fire({
      icon: 'success',
      title: 'Registration successful!',
      text: 'You can now log in.',
      showConfirmButton: false,
      timer: 2000
    });

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
}

// Handle Login
function handleLogin() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  let users_new = JSON.parse(localStorage.getItem('users_new')) || {};

  if (users_new[username] && users_new[username] === password) {
    Swal.fire({
      icon: 'success',
      title: 'Login successful!',
      showConfirmButton: false,
      timer: 1500
    });

    document.querySelector('.form').classList.add('hidden');
    document.getElementById('startApp').classList.remove('hidden');

  } else {
    Swal.fire({
      icon: 'error',
      title: 'Wrong username or password!',
      text: 'Please try again.',
    });
  }
}

// Start App (Redirect or Load Dashboard)
function startReactApp() {
  window.location.href = "http://localhost:3000";
}
