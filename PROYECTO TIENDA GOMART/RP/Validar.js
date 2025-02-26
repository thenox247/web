document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      let valid = true;
  
      // Validación de campos
      const fields = [
        { id: 'name', errorId: 'nombreError' },
        { id: 'lastname', errorId: 'apellidosError' },
        { id: 'tipdoc', errorId: 'tipoDocumentoError' },
        { id: 'doc', errorId: 'numeroDocumentoError' },
        { id: 'date', errorId: 'fechaNacimientoError' },
        { id: 'tel', errorId: 'telefonoError', isPhone: true },
        { id: 'email', errorId: 'correoElectronicoError' },
        { id: 'address', errorId: 'direccionError' }
      ];
  
      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorMessage = document.getElementById(field.errorId);
  
        if (!input.value) {
          errorMessage.style.display = 'block';
          valid = false;
        } else {
          errorMessage.style.display = 'none';
        }
  
        if (field.isPhone && input.value && !/^\d+$/.test(input.value)) {
          errorMessage.textContent = 'El teléfono es obligatorio y debe contener solo números.';
          errorMessage.style.display = 'block';
          valid = false;
        } else if (field.isPhone) {
          errorMessage.textContent = 'El teléfono es obligatorio.';
        }
      });
  
      // Si el formulario es válido, puedes enviarlo o realizar la acción necesaria
      if (valid) {
        // Aquí puedes añadir la lógica para enviar el formulario
        alert('Usuario registrado correctamente');
        form.submit();
      }
    });
  });
  