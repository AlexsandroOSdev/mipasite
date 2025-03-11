let currentSlide = 0;
const slides = document.querySelectorAll('.carrossel .slide');
const totalSlides = slides.length;

const nextButton = document.querySelector('.carrossel-next');
const prevButton = document.querySelector('.carrossel-prev');

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0; // Volta ao primeiro slide
  } else if (index < 0) {
    currentSlide = totalSlides - 1; // Vai para o último slide
  } else {
    currentSlide = index;
  }

  const newTransformValue = -currentSlide * 100; // Move as imagens para a esquerda
  document.querySelector('.carrossel').style.transform = `translateX(${newTransformValue}%)`;
}

nextButton.addEventListener('click', () => showSlide(currentSlide + 1));
prevButton.addEventListener('click', () => showSlide(currentSlide - 1));

// Inicia o carrossel com o primeiro slide
showSlide(currentSlide);
