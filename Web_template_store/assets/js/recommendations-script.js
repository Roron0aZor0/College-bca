document.addEventListener('DOMContentLoaded', function() {
    const imageGrid = document.querySelector('.image-grid');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const scrollAmount = 300;
  
    function updateScrollButtons() {
      const scrollLeft = imageGrid.scrollLeft;
      const maxScroll = imageGrid.scrollWidth - imageGrid.clientWidth;
      
      prevButton.disabled = scrollLeft <= 0;
      nextButton.disabled = scrollLeft >= maxScroll;
      
      prevButton.setAttribute('aria-disabled', scrollLeft <= 0);
      nextButton.setAttribute('aria-disabled', scrollLeft >= maxScroll);
    }
  
    prevButton.addEventListener('click', () => {
      imageGrid.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });
  
    nextButton.addEventListener('click', () => {
      imageGrid.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
  
    imageGrid.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    updateScrollButtons();
  
    document.querySelectorAll('.view-details').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const link = e.target.closest('.product-link');
        if (link) {
          window.location.href = link.href;
        }
      });
  
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const link = e.target.closest('.product-link');
          if (link) {
            window.location.href = link.href;
          }
        }
      });
    });
  });
