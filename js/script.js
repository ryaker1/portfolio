
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.project-card');
    let maxHeight = 0;
    cards.forEach(card => {
      card.style.height = 'auto'; // reset
      if (card.offsetHeight > maxHeight) {
        maxHeight = card.offsetHeight;
      }
    });
    cards.forEach(card => {
      card.style.height = maxHeight + 'px';
    });
  });