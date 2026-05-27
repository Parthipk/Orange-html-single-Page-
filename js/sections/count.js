const animateCounter = (counter) => {
    const target = +counter.dataset.target;
    const duration = 1500;
    const startTime = performance.now();

    const update = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        counter.innerText = Math.floor(progress * target);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            counter.innerText = target;
        }
    };

    requestAnimationFrame(update);
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.count').forEach(counter => observer.observe(counter));