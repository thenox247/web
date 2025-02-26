document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
      var errorMessages = [];
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      if (email === '') {
          errorMessages.push('El correo electrónico es requerido.');
      } else {
          // Validación básica del correo electrónico
          var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
          if (!emailPattern.test(email)) {
              errorMessages.push('El correo electrónico no es válido.');
          }
      }
  
      if (password === '') {
          errorMessages.push('La contraseña es requerida.');
      } else {
          // Validación de la longitud de la contraseña
          var minLength = 8;
          var maxLength = 20;
  
          if (password.length < minLength) {
              errorMessages.push(`La contraseña debe tener al menos ${minLength} caracteres.`);
          } else if (password.length > maxLength) {
              errorMessages.push(`La contraseña no debe tener más de ${maxLength} caracteres.`);
          } else {
              // Validación de que la contraseña contiene al menos una letra y un número
              var letterPattern = /[A-Za-z]/;
              var numberPattern = /\d/;
              if (!letterPattern.test(password) || !numberPattern.test(password)) {
                  errorMessages.push('La contraseña debe contener al menos una letra y un número.');
              }
          }
      }
  
      var errorBox = document.getElementById('errorMessages');
  
      if (errorMessages.length > 0) {
          event.preventDefault();
          errorBox.style.display = 'block';
          errorBox.innerHTML = errorMessages.join('<br>');
      } else {
          errorBox.style.display = 'none';
      }
    });
  });
  
  