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

document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;        // the .faq-answer div
    const expanded = btn.getAttribute('aria-expanded') === 'true';

    // collapse all answers (one-open-at-a-time) – remove if you want multi-open
    document.querySelectorAll('.faq-answer.open').forEach(a => {
      a.classList.remove('open');
      a.previousElementSibling.setAttribute('aria-expanded','false');
    });

    // toggle current
    if (!expanded) { answer.classList.add('open'); }
    btn.setAttribute('aria-expanded', !expanded);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form    = document.getElementById('leadForm');
  const thanks  = document.getElementById('thankYouMessage');

  form.addEventListener('submit', e => {
    e.preventDefault();                 // stop default nav / reload
    form.style.display = 'none';        // hide the form
    thanks.style.display = 'block';     // reveal thank-you pane

    /* 👉  send the data to Netlify in the background */
    const data = new FormData(form);
    fetch('/', { method:'POST', body:data })
      .catch(console.error);            // silent fail = still shows thank-you
  });

// Animate counting numbers
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');
    
    statValues.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(counter);
                stat.textContent = target + '%';
            } else {
                stat.textContent = Math.floor(current) + '%';
            }
        }, 16);
    });
}

// Trigger when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const resultsSection = document.querySelector('.results');
if (resultsSection) observer.observe(resultsSection);
});
