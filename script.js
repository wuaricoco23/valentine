// Esperar a que la animación de introducción termine
setTimeout(() => {
    // Ocultar la animación de introducción
    document.querySelector('.intro-animation').style.display = 'none';
    // Mostrar la presentación con el gato
    document.querySelector('.presentation').classList.remove('hidden');
  
    // Esperar 3 segundos y luego mostrar la pregunta
    setTimeout(() => {
      document.querySelector('.presentation').classList.add('hidden');
      document.querySelector('.content').classList.remove('hidden');
      // Lanzar confeti de corazones
      launchHeartConfetti();
    }, 3000); // 3 segundos para la presentación
  }, 2000); // 2 segundos para la animación inicial
  
  // Función para lanzar confeti de corazones
  function launchHeartConfetti() {
    const heartColors = ['#ff6f61', '#ff9a9e', '#ffccd2', '#ff85a2']; // Colores de corazones
    confetti({
      particleCount: 100, // Cantidad de partículas
      spread: 70, // Ángulo de dispersión
      origin: { y: 0.6 }, // Posición de origen (abajo)
      shapes: ['heart'], // Forma de corazones
      colors: heartColors, // Colores personalizados
      scalar: 1.5, // Tamaño de los corazones
    });
  }
  
  // Agregar interactividad a los botones
  const yesBtn = document.getElementById('yes-btn');
  const noBtn = document.getElementById('no-btn');
  
  yesBtn.addEventListener('click', () => {
    alert('¡Sabía que dirías que sí! 💖');
    launchHeartConfetti(); // Más confeti al decir "Sí"
  });
  
  noBtn.addEventListener('click', () => {
    // Hacer que el botón "No" sea difícil de hacer clic
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${Math.random() * 80 + 10}%`;
    noBtn.style.top = `${Math.random() * 80 + 10}%`;
  });