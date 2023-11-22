// Funcion para agregar las tareas 
const agregarTarea = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const contenedorDeTareas = document.querySelector('.tareasCargadas');
    const nuevaTarea = document.createElement('div');

    nuevaTarea.className = 'col-md-12 border border-1 d-flex justify-content-between p-2 align-items-center mb-2 bg-body';
    nuevaTarea.innerHTML = `
        <p class="fs-5">${input.value}</p>
        <button class="btn btn-outline-danger btn-borrar">Borrar</button>`;
    
    // Funcion para eliminar las tareas 
    nuevaTarea.querySelector('.btn-borrar').addEventListener('click', () => {
        contenedorDeTareas.removeChild(nuevaTarea);  
    });
    
    contenedorDeTareas.appendChild(nuevaTarea);
    
    input.value = '';
}


// Iniciamos el evento para añadir las tareas escritas en el input 
const formInput = document.getElementById('form-container');
formInput.addEventListener('submit', agregarTarea);
