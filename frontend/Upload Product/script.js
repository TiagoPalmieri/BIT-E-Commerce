// Obtén referencias a los elementos
const inputFile = document.getElementById('input-file');
const imgView = document.getElementById('img-view');

// Función para manejar la carga de la imagen
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imgView.style.backgroundImage = `url(${e.target.result})`;
            imgView.innerHTML = ''; // Limpia el contenido previo para mostrar la imagen
        };
        reader.readAsDataURL(file);
    }
}

// Añade el evento de cambio al input file
inputFile.addEventListener('change', handleFileUpload);

// Maneja el arrastre y la caída de archivos
const dropArea = document.getElementById('drop-area');

dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropArea.classList.add('dragging'); // Puedes agregar una clase para efectos visuales
});

dropArea.addEventListener('dragleave', (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropArea.classList.remove('dragging'); // Remueve la clase cuando el archivo sale del área
});

dropArea.addEventListener('drop', (event) => {
    event.preventDefault();
    event.stopPropagation();
    dropArea.classList.remove('dragging'); // Remueve la clase cuando el archivo se deja caer

    const file = event.dataTransfer.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imgView.style.backgroundImage = `url(${e.target.result})`;
            imgView.innerHTML = ''; // Limpia el contenido previo para mostrar la imagen
        };
        reader.readAsDataURL(file);
    }
});

