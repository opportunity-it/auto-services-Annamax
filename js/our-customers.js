document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.customers-quantity');
    const options = { threshold: 0.5 }; 

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 200; 

        let currentValue = 0;
        const updateCounter = () => {
            currentValue += increment;
            if (currentValue < target) {
                counter.textContent = Math.ceil(currentValue);
                requestAnimationFrame(updateCounter); 
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); 
            }
        });
    }, options);

    counters.forEach((counter) => observer.observe(counter));
});
