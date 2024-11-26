document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('testimonialsContainer');
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const cardWidth = 416;

  function updateButtonStates() {
    const isAtStart = container.scrollLeft === 0;
    const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;
    
    prevButton.disabled = isAtStart;
    nextButton.disabled = isAtEnd;
    
    prevButton.style.opacity = isAtStart ? '0.5' : '1';
    nextButton.style.opacity = isAtEnd ? '0.5' : '1';
  }

  function scrollToNext() {
    container.scrollBy({
      left: cardWidth,
      behavior: 'smooth'
    });
  }

  function scrollToPrev() {
    container.scrollBy({
      left: -cardWidth,
      behavior: 'smooth'
    });
  }

  nextButton.addEventListener('click', scrollToNext);
  prevButton.addEventListener('click', scrollToPrev);
  container.addEventListener('scroll', updateButtonStates);
  window.addEventListener('resize', updateButtonStates);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
      scrollToPrev();
    } else if (e.key === 'ArrowRight') {
      scrollToNext();
    }
  });

  updateButtonStates();
});