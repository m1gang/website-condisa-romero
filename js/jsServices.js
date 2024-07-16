// Obtener elementos necesarios
const gallery = document.querySelector('.gallery');
const overlay = document.createElement('div');
overlay.classList.add('overlay');

// Agregar evento de clic a las imágenes
gallery.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const imageSrc = event.target.getAttribute('src');
    const imageAlt = event.target.getAttribute('alt');

    // Crear imagen en la vista en pantalla completa
    const overlayImage = document.createElement('img');
    overlayImage.src = imageSrc;
    overlayImage.alt = imageAlt;

    // Agregar imagen a la superposición
    overlay.innerHTML = '';
    overlay.appendChild(overlayImage);

    // Agregar flechas de navegación
    const prevArrow = document.createElement('div');
    prevArrow.classList.add('arrow', 'prev');
    prevArrow.innerHTML = '&#10094;';
    overlay.appendChild(prevArrow);

    const nextArrow = document.createElement('div');
    nextArrow.classList.add('arrow', 'next');
    nextArrow.innerHTML = '&#10095;';
    overlay.appendChild(nextArrow);

    // Mostrar la vista en pantalla completa
    overlay.classList.add('active');
    document.body.appendChild(overlay);

    // Obtener todas las imágenes de la galería
    const images = Array.from(document.querySelectorAll('.gallery .image img'));
    const totalImages = images.length;
    let currentIndex = images.findIndex((img) => img.src === imageSrc);

    // Agregar eventos de clic a las flechas de navegación
    prevArrow.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      overlayImage.src = images[currentIndex].src;
      overlayImage.alt = images[currentIndex].alt;
    });

    nextArrow.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalImages;
      overlayImage.src = images[currentIndex].src;
      overlayImage.alt = images[currentIndex].alt;
    });
  }
});

// Cerrar la vista en pantalla completa al hacer clic fuera de la imagen
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    overlay.classList.remove('active');
  }
});