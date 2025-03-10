// On-scroll animation using Intersection Observer
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    // Observe all elements with the "hidden" class
    document.querySelectorAll('.hidden').forEach(element => {
      observer.observe(element);
    });
  });
  