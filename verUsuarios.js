// Función para mostrar los usuarios registrados
function mostrarUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.length === 0) {
        console.log('No hay usuarios registrados.');
        return;
    }

    console.log('Usuarios registrados:');
    console.table(usuarios); // Mostrar los datos en formato de tabla
}

// Ejecutar la función al cargar el archivo
mostrarUsuarios();
