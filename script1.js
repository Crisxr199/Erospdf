// Este código asegura que la página se cargue solo si el DOM está completo.
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('El DOM ha sido completamente cargado y analizado. ¡La página está lista!');

  // A partir de aquí, puedes agregar el código que necesites para manipular los elementos de la página.
  // Por ejemplo, para ocultar todas las imágenes al cargar la página:
  const imagenes = document.querySelectorAll('.w1');
  imagenes.forEach(img => {
    img.style.display = 'none';
  });

  // Puedes añadir cualquier otra lógica que necesites aquí,
  // como animaciones, manejo de eventos, etc.
});