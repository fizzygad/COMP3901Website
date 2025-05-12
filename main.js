 // Find every button with the shared class
document.querySelectorAll('.swap-btn').forEach(btn => {
    const original = btn.textContent;   // default label
    const hover    = btn.dataset.hover; // label on hover (from data-hover)
  
    // Swap on mouse-enter
    btn.addEventListener('mouseenter', () => {
      btn.textContent = hover;
    });
  
    // Restore on mouse-leave
    btn.addEventListener('mouseleave', () => {
      btn.textContent = original;
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.testimonial');
  const prev  = document.querySelector('.testimonial-prev');
  const next  = document.querySelector('.testimonial-next');

  if (!cards.length || !prev || !next) return;   // safety check

  let index = 0;                                // current card index

  const show = i => {
    cards.forEach(c => c.classList.remove('active'));
    cards[i].classList.add('active');
  };

  next.addEventListener('click', () => {
    index = (index + 1) % cards.length;         // wrap forward
    show(index);
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length; // wrap back
    show(index);
  });
});