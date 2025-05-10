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
  