// On-scroll animation using Intersection Observer
document.addEventListener("DOMContentLoaded", function() {
    // Intersection Observer for fade-in sections
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
  
    // FAQ Accordion
    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach((item) => {
      const header = item.querySelector(".accordion-header");
      header.addEventListener("click", () => {
        // Close any other open accordion items (optional)
        accordionItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
          }
        });
        // Toggle the current item
        item.classList.toggle("active");
      });
    });
  });
  